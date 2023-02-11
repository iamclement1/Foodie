import './App.css'
import { Navbar } from './components'
import { AnimatePresence } from 'framer-motion'
import Routing from './routes/Routing'

function App() {

  return (
    <AnimatePresence exitBeforeEnter>
      <div className="App">
        <div className="w-screen h-auto flex flex-col bg-primary">
          <Navbar />
          <main className='mt-24 p-8 w-full'>
            <Routing />
          </main>
        </div>
      </div>
    </AnimatePresence>
  )
}

export default App

