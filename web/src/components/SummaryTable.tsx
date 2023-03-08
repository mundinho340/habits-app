import { generateDatesFromYearBeginning } from "../utils/generate-dates-from-year-beginning"
import { HabitsDay } from "./HabitsDay"

const weekDays =[
    'D',
    'S',
    'T',
    'Q',
    'Q',
    'S',
    'S',
  ]

const summaryDates = generateDatesFromYearBeginning()
const minimumSummaryDatesSize = 18 * 7 //18 semanas
const amountOfDaysTofill = minimumSummaryDatesSize - summaryDates.length


export function SummaryTable(){
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
                {summaryDates.map(day =>{
                    return(
                        <HabitsDay 
                        key={day.toString()}
                         amount={5} 
                         completed={Math.random()*5} 
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

