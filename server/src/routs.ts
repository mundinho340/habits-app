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
    
        const {date} =getDayParams.parse(request.query)
        const WeekDay = dayjs(date).get('day')
    
        const possibleHabit = await prisma.habit.findMany({
            where:{
                created_at:{
                    lte: date,
                },
                WeekDays:{
                    some:{
                        week_day:WeekDay   
                        
                    }
                }
            },
        })
        return{
           possibleHabit 
        } 
     })

 }


    


