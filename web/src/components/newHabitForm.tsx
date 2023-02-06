import { Check } from "phosphor-react";

export function NewHabitForm(){
    return(
        <form className="w-full flex flex-col mt-6">
            <label htmlFor="title" className="font-semibold loading-tight">
                Qual é o seu comportamento?
            </label>

            <input type="text"
            id="title"
            placeholder="ex.: Exercicios, dormir be,, etc..."
            autoFocus
            />

            <label htmlFor="">
                Qual a recorrencia?
            </label>

            <button type="submit">
                <Check size={20} weight="bold"/>
                Confirmar
            </button>
        </form>
    )
}