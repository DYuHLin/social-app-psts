import React, {useContext} from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from './pages/components/Navbar'
import './assets/style.css'
import AppContext from './context/AppContext'

function App() {

  const {user} = useContext(AppContext)

  return (
    <div className='root-component'>
      {user ? <Navbar /> : ''} 
      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default App
