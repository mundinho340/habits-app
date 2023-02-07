import * as Popover from '@radix-ui/react-popover'

// interface HabitsProps{
//     completed: number
// }

export  function HabitsDay(){
    return(
       <Popover.Root>
        <Popover.Trigger className='w-10 h-10 bg-zinc-900 border-zinc-800 rounded-lg'/>
        <Popover.Portal>
            <Popover.Content className='min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col'>
                <span>terça-feira</span>
                <span>07/02</span>
                <Popover.Arrow height={8} width={16} className='fill-zinc-900'/>
            </Popover.Content>
        </Popover.Portal>
       </Popover.Root>
       
    )
}