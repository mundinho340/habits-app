const weekDays =[
    'D',
    'S',
    'T',
    'Q',
    'Q',
    'S',
    'S',
  ]
export function SummaryTable(){
    return(
        <div className="m-full flex">
            <div className="grid grid-rows-7 grid-flow gap-3">
                
                    {weekDays.map((weekDay,i )=> {
                        return(
                            <div key={`${weekDay} +${i}`} className="text-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center">
                                {weekDay}
                            </div>
                        )

                    })}
                
            </div>
        </div>
    )
}

