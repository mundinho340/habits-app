interface ProgressBarProps{
    progress: number
}

export function ProgressBar(Props: ProgressBarProps){
    return(
        <div
            role="progressbar"
            aria-label='Progresso de habitos completados nesse dia'
            aria-valuenow={Props.progress}
            className='h-3 rounded-xl bg-violet-600'
            style={{width: `${Props.progress}%`}}
        />
    )
}