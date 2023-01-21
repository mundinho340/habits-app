import {prisma} from "./lib/prisma"
import { FastifyInstance } from "fastify" 
import {z} from 'zod'

export async function appRouts(app: FastifyInstance){
    app.get('/', async (request)=>{
    const habits  = await  prisma.habit.findMany({
      app.post('/habits', async (request)=>{
        const createHabitBody = z.object({
            title: z.string(),
            WeekDays: z.array(
                z.number().min(0).max(6)
            )
        })
        const {title, WeekDays}= createHabitBody.parse(request.body)

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


    })
    return habits
 })
}

