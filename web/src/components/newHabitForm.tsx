import { Check } from "phosphor-react";
import { useEffect, useState } from "react";
import *as  CheckBox from '@radix-ui/react-checkbox'
import { FormEvent } from "react";

import {api} from '../../../server/src/lib/axios'
const dayWeeks =[
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sabado'
]
export function NewHabitForm(){
    const [title, setTitle]=useState('')

    const [weekDays, setWeekDays] = useState<number[]>([])
    // console.log('executou!')
    useEffect(()=>{
        api.get('')

    },[])
    function createNewHabit(event: FormEvent){
        event.preventDefault()
        console.log(title, weekDays)
    }

    function handleToggleWeekDay(weekDay: number){
        if(weekDays.includes(weekDay)){
            const weekDaysWithRemovedOne = weekDays.filter(day => day !== weekDay)
            setWeekDays(weekDaysWithRemovedOne)
        }
        else{
            const weekDaysWithRemovedOne =[...weekDays, weekDay] 
            setWeekDays(weekDaysWithRemovedOne)
        }
    }
    return(
        <form onSubmit={createNewHabit} className="w-full flex flex-col mt-6">
            <label htmlFor="title" className="font-semibold loading-tight">
                Qual é o seu comportamento?
            </label>

            <input type="text"
            id="title"
            placeholder="ex.: Exercicios, dormir be,, etc..."
            autoFocus
            className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400"
            onChange={event =>setTitle(event.target.value)}
            
            />

            <label htmlFor=""  className="font-semibold loading-tight mt-4">
                Qual a recorrencia?
            </label>
            {dayWeeks.map((days, index)=>(
        
                <div className="flex flex-col gap-2 mt-3" key={days}>
                        <CheckBox.Root
                        className='flex items-center gap-3 group'
                        onCheckedChange={()=>{
                            handleToggleWeekDay(index)
                        }}
                    >
                        <div className='h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500'>
                            <CheckBox.Indicator>
                                <Check size={20}  className="text-white"/>
                            </CheckBox.Indicator>
                        </div>
                        <span className=' text-white leading-tight'>
                           {days}
                        </span>
                    </CheckBox.Root>
            </div>
            ))}
          

            <button type="submit"
            className="mt-6 rounded-lg p-4 flex items-center justify-center gap-3 font-semibold bg-green-400 hover:bg-green-500"
            >
                <Check size={20} weight="bold"/>
                Confirmar
            </button>
        </form>
    )
}