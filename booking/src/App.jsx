import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DatePickerPag from './components/DatePickerPag'
import SlotList from './components/SlotList'

function App() {
  const [selectedDateData, setSelectedDateData] = useState([]);

  const updateSelectedDateData = (data) => {
    setSelectedDateData(data);
  };
  console.log(selectedDateData);

  return (
    <div className='container'>
      <h2>Por favor, selecciona la fecha y una sesión o más</h2>
      <DatePickerPag updateSelectedDateData={updateSelectedDateData}/>
      <SlotList selectedDateData={selectedDateData}/>
    </div>
  )
}

export default App
