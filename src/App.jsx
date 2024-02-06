import { useState } from 'react'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import { Outlet } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}

export default App
