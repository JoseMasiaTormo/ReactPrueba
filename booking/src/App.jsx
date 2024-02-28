import { useState, useEffect } from "react";
import "./App.css";
import DatePickerPag from "./components/DatePickerPag/DatePickerPag";
import SlotList from "./components/SlotList/SlotList";
import axios from "axios";
import { dateFormat } from "./classes/date.service";

axios.interceptors.request.use(
  (config) => {
    SlotList.setLoading(true);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    SlotList.setLoading(false);
    return response;
  },
  (error) => {
    SlotList.setLoading(false);
    return Promise.reject(error);
  }
);

export default function App() {
  const [selectedDateData, setSelectedDateData] = useState([]);

  const updateSelectedDateData = async (date) => {
    try {
      const response = await axios.get(`http://localhost:8000/${dateFormat.formatDate(date)}`);
      if (response.status === 200) {
        setSelectedDateData(response?.data?.data);
      } else {
        setSelectedDateData([]);
      }
    } catch (error) {
      setSelectedDateData([]);
      console.error("Error al obtener los datos de la API", error);
    }
  };

  useEffect(() => {
    const currentDate = new Date();
    updateSelectedDateData(currentDate);
  }, []);

  return (
    <div className="container">
      <h2>Por favor, selecciona la fecha y una sesión o más</h2>
      <DatePickerPag updateSelectedDateData={updateSelectedDateData} />
      <SlotList selectedDateData={selectedDateData} />
    </div>
  );
}
