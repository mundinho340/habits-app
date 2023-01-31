import {Plus} from 'phosphor-react'
//import { Habits } from './components/Habits'
import logoImage from '../assets/logo.svg'

export function Header(){
    return(
        <div className='w-full max-w-3xl mx-auto flex items-center justify-between'>
        <img src={logoImage} alt="Habits" />

        <button
        type='button'
        className='border border-violet-500 font-semibold rounded-lg px-6 py-4
        flex justify-between gap-3 hover:border-violet-300 items-center'

        >
          <Plus size={20} className="text-violet-500"/>
          Novo Habito
        </button>
    </div>
    )
}