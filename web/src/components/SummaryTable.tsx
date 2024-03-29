import dayjs from "dayjs"
import { generateDatesFromYearBeginning } from "../utils/generate-dates-from-year-beginning"
import { HabitsDay } from "./HabitsDay"
import { useState,useEffect } from "react"
import {api} from '../../lib/axios'


const weekDays =[
    'D',
    'S',
    'T',
    'Q',
    'Q',
    'S',
    'S',
  ]
type Summary = Array<{
id: number;
date: string;
completed: number;
amount: number

}>

const summaryDates = generateDatesFromYearBeginning()
const minimumSummaryDatesSize = 18 * 7 //18 semanas
const amountOfDaysTofill = minimumSummaryDatesSize - summaryDates.length


export function SummaryTable(){

     const [summary, setSummary] =useState <Summary>([])
        useEffect(()=>{
        api.get('summary').then(response=>{
            setSummary(response.data)
        })

    },[])
    // api.get('')
    return(
        <div className="m-full flex">
            <div className="grid grid-rows-7 grid-flow gap-3">
                    {weekDays.map((weekDay,i )=> {
                        return(
                            <div key={`${weekDay} -${i}`} className="text-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center">
                                {weekDay}
                            </div>
                        )

                    })}
            </div>

            <div className="grid grid-rows-7 grid-flow-col gap-3">
                {summaryDates.map(date =>{
                    const dayInSummary = summary.find(day =>{
                        return dayjs(date).isSame(day.date, 'day')
                    })

                    return(
                        <HabitsDay 
                        key={date.toString()}
                        date={date}
                         amount={dayInSummary?.amount} 
                         completed={dayInSummary?.completed} 
                        />
                )
                })}

                {amountOfDaysTofill> 0 && Array.from({ length: amountOfDaysTofill}).map((_,i)=>{
                    return(
                        <div key={i} className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed">

                        </div>
                    )
                })}
            </div>
        </div>
    )
}

