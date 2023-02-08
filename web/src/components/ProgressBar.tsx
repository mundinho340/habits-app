export function ProgressBar(){
    return(
        <div
            role="progressbar"
            aria-label='Progresso de habitos completados nesse dia'
            aria-valuenow={75}
            className='h-3 rounded-xl bg-violet-600 w-3/4'
        />
    )
}