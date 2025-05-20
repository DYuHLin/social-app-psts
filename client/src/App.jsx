import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from './pages/components/Navbar'
import './assets/style.css'
import AppContext from './context/AppContext'

function App() {

  // const {user, gUser} = useContext(AppContext)

  return (
    <div className='root-component'>
      {/* {user || gUser ? <Navbar />  : ''}  */}
      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default App
