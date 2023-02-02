import {prisma} from "./lib/prisma"
import { FastifyInstance } from "fastify" 
import {z} from 'zod'
import dayjs from 'dayjs'

export async function appRouts(app: FastifyInstance){
      app.post('/habits', async (request)=>{
      const createHabitBody = z.object({
            title: z.string(),
            WeekDays: z.array(
                z.number().min(0).max(6)
            )
        })
        const {title, WeekDays}= createHabitBody.parse(request.body)

        const today = dayjs().startOf('day').toDate()
        await prisma.habit.create({
            data:{
                title,
                created_at: new Date(),
                WeekDays:{
                    create: WeekDays.map(WeekDay=>{
                        return{
                            week_day:WeekDay,
                        }
                    })
                }
            }
        })
      })
      app.get("/day", async (request)=>{
        const getDayParams = z.object({
            date: z.coerce.date()
        })
    
        const {date} =getDayParams.parse (request.query)
        const parsedDate =dayjs(date).startOf('day')
        const WeekDay = dayjs(date).get('day')

        console.log(date, WeekDay)
    
        const possibleHabits = await prisma.habit.findMany({
            where:{
                created_at:{
                    lte: date,
                },
                WeekDays:{
                    some:{
                        week_day:WeekDay   
                        
                    }
                }
            }
        })

        const day = await prisma.day.findUnique({
            where:{
                date: parsedDate.toDate(),

            },
            include:{
                  DayHabits:true,
            }


        })
        const completedHabits = day?.DayHabits.map(DayHabit=>{
            return DayHabit.habit_id
        }) 
        return{
           possibleHabits,
           completedHabits
        } 
     })
     

     //completed and uncompleted
     //o id é o rout param é um parametro de identificação.

     app.patch('/habits/:id/toggle', async (request) =>{
        const toggleHabitParams =z.object({
            id: z.string().uuid(),
        })

        const { id } = toggleHabitParams.parse(request.params)

        const today = dayjs().startOf('day').toDate()
        let day= await prisma.day.findUnique({
            where:{
                date: today,
            }
        })

        if(!day){
            day = await prisma.day.create({
                data:   {
                    date: today,
                }
            })
        }

        const dayHabit = await prisma.dayHabit.findUnique({
            where: {
                day_id_habit_id:{
                    day_id: day.id,
                    habit_id: id,
                }
            }
        })

        if(dayHabit){
            await prisma.dayHabit.delete({
                where:{
                    id: dayHabit.id,
                }
            })
        }
        else{
             //completar os habitos
            await prisma.dayHabit.create({
            data:   {
                day_id: day.id,
                habit_id: id,
            }
        })
        }
     })

     app.get('/summary', async ()=>{

        const summary = await prisma.$queryRaw`
            SELECT 
            D.id, 
            D.date,
            (
                SELECT
                    cast(count(*) as float) 
                    FROM day_habits DH
                    WHERE DH.day_id =D.id
            ) as completed,
            (
                SELECT 
                cast(count(*) as float)
                FROM habit_week_days HWD
                WHERE 
                HWD.week_day =cast(strftime('%w', D.date/1000.0, 'unixepoch') as int)
            ) as amount
            FROM days D
        `
        return summary
     })
 }


    


