import './App.css'
import { Navbar } from './components'
import { AnimatePresence } from 'framer-motion'
import Routing from './routes/Routing'
import { useStateValue } from './context/StateProvider'
import { getAllItems } from './utils/FirebaseFunctions'
import { useEffect } from 'react'
import { actionType } from './context/reducer'

function App() {

  const [ {foodItems}, dispatch ] = useStateValue();

  const fetchData = async () => {
    await getAllItems()
    .then(data => {
      dispatch({
        type : actionType.SET_FOOD_ITEMS,
        foodItems: data,
      })
    })
  }


  useEffect(() => {
    fetchData();
  }, [])

  return (
    <AnimatePresence exitBeforeEnter>
      <div className="App">
        <div className="w-screen h-auto flex flex-col bg-primary">
          <Navbar />
          <main className='mt-14 md:mt-20 px-4 md:px-16 py-8 w-full'>
            <Routing />
          </main>
        </div>
      </div>
    </AnimatePresence>
  )
}

export default App

