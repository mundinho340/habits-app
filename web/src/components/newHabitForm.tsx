import { Check } from "phosphor-react";
import *as  CheckBox from '@radix-ui/react-checkbox'

export function NewHabitForm(){
    const dayWeeks =[
        'segunda-feira',
        'terça-feira',
        'quarta-feira',
        'quinta-feira',
        'sexta-feira',
        'sabado'
    ]
    return(
        <form className="w-full flex flex-col mt-6">
            <label htmlFor="title" className="font-semibold loading-tight">
                Qual é o seu comportamento?
            </label>

            <input type="text"
            id="title"
            placeholder="ex.: Exercicios, dormir be,, etc..."
            autoFocus
            className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400"
            />

            <label htmlFor=""  className="font-semibold loading-tight mt-4">
                Qual a recorrencia?
            </label>
            {dayWeeks.map((days, index)=>(
                <div>
                      <div className="flex flex-col gap-2 mt-3">
                <CheckBox.Root
                        className='flex items-center gap-3 group'
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