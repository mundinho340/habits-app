interface HabitsProps{
    completed: number
}

export  function Habits(props: HabitsProps){
    return(
        <div className="bg-zinc-900 w-10 m-2 text-center justify-center ">{props.completed}</div>
    )
}