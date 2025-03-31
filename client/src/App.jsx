import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from './pages/components/Navbar'
import './assets/style.css'

function App() {

  return (
    <div className='root-component'>
    {/* <Navbar /> */}
      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default App
