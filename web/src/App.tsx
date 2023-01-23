import './App.css'
import "./styles/global.css"
//import { Habits } from './components/Habits'
import logoImage from './assets/logo.svg'

function App() {

  return (
    <div className='w-screnn h-screen flex justify-center items-center'>
        <div className='w-full max-m-5xl px-6 flex flex-col gap-16'>
          <div className='a-full max-w-3xl mx-auto flex items-center justify-between'>
              <img src={logoImage} alt="Habits" />

              <button
              type='button'
              className='border #border-violet-500 font-semibold rounded-lg px-6 py-4'
              >
                Novo Habito
              </button>
          </div>

        </div>

    </div>
      
  )
}

export default App
