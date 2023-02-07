import * as Popover from '@radix-ui/react-popover'

// interface HabitsProps{
//     completed: number
// }

export  function HabitsDay(){
    return(
       <Popover.Root>
        <Popover.Trigger className='w-10 h-10 bg-zinc-900 border-zinc-800 rounded-lg'/>
        <Popover.Portal>
            <Popover.Content>
                
            </Popover.Content>
        </Popover.Portal>
       </Popover.Root>
       
    )
}