import { useState, useEffect } from 'react'
import './App.css'
import DatePickerPag from './components/DatePickerPag'
import SlotList from './components/SlotList'
import axios from 'axios'

axios.interceptors.request.use((config) => {
  SlotList.setLoading(true);
  return config;
}, (error) => {
  return Promise.reject(error);
});

axios.interceptors.response.use((response) => {
  SlotList.setLoading(false);
  return response;
}, (error) => {
  SlotList.setLoading(false);
  return Promise.reject(error);
});

function App() {
  const [selectedDateData, setSelectedDateData] = useState([]);

  const updateSelectedDateData = async (date) => {
    try {
      const response = await axios.get(`http://localhost:8000/${formatDate(date)}`);
      if (response.status === 200) {
          setSelectedDateData(response.data.data);  
      } else {
          setSelectedDateData([]);
      }
  } catch (error){
      setSelectedDateData([]);
      console.error("Error al obtener los datos de la API", error);
  }
  };

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    const currentDate = new Date();
    updateSelectedDateData(currentDate);
  }, []);

  return (
    <div className='container'>
      <h2>Por favor, selecciona la fecha y una sesión o más</h2>
      <DatePickerPag updateSelectedDateData={updateSelectedDateData}/>
      <SlotList selectedDateData={selectedDateData}/>
    </div>
  )
}

export default App
