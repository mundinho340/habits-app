import {Plus} from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'
//import { Habits } from './components/Habits'
import logoImage from '../assets/logo.svg' 
import { useState } from 'react'

export function Header(){
    return(
        <div className='w-full max-w-3xl mx-auto flex items-center justify-between'>
          <img src={logoImage} alt="Habits" />
          <Dialog.Root>
            <Dialog.Trigger
            type='button'
            className='border border-violet-500 font-semibold rounded-lg px-6 py-4
            flex justify-between gap-3 hover:border-violet-300 items-center'
            >
              <Plus size={20} className="text-violet-500"/>
              Novo Habito
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className='w-screen h-screen bg-black/80 fixed insert-0'/> 
              <Dialog.Content className='absolute p-10 bg-zinc-900 rounded-3xl w-full max-w-md top-1/2'>
                Conteudo do modal
              </Dialog.Content >
              
            </Dialog.Portal>
          </Dialog.Root>
          
    </div>
    )
}