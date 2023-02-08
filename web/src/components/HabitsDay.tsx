import * as Popover from '@radix-ui/react-popover'
import { ProgressBar } from './ProgressBar'
import clsx from 'clsx'

interface HabitsProps{
     completed: number
        amount: number
    }

export  function HabitsDay({completed, amount}: HabitsProps){
    const completedPercentage = Math.round((completed/ amount)*100)
    return(
       <Popover.Root>
        <Popover.Trigger className={clsx('w-10 h-10 bg-zinc-900 border-zinc-800 rounded-lg',{
            'bg-zinc-900 border-zinc-800': completedPercentage===0,
            'bg-violet-900 border-violet-788': completedPercentage>= 0 && completedPercentage<20,
            'bg-violet-800 border-violet-600': completedPercentage>= 20 && completedPercentage<40,
            'bg-violet-700 border-violet-500': completedPercentage>= 40 && completedPercentage<60,
            'bg-violet-600 border-violet-500': completedPercentage>= 60 && completedPercentage<80,
            'bg-violet-500 border-violet-400': completedPercentage>=80,

        })}/>
        <Popover.Portal>
            <Popover.Content className='min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col'>
                <span className='font-semibold text-zinc-400'>terça-feira</span>
                <span className='at-1 font-extrabold leading-light text-3xl'>07/02</span>
                <div className='h-3 rounded-xl bg-zinc-700 w-full mt-4'>
                    <ProgressBar progress={30}/>
                </div>
                <Popover.Arrow height={8} width={16} className='fill-zinc-900'/>
            </Popover.Content>
        </Popover.Portal>
       </Popover.Root>
       
    )
}