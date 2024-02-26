import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DatePickerPag from './components/DatePickerPag'

function App() {
  return (
    <div className='container'>
      <h2>Por favor, selecciona la fecha y una sesión o más</h2>
      <DatePickerPag />
    </div>
  )
}

export default App
