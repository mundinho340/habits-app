interface HabitsProps{
    completed: number
}

export  function Habits(props: HabitsProps){
    return(
        <div className="bg-zinc-900">{props.completed}</div>
    )
}