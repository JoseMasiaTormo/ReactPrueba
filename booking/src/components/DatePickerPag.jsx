import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

export default function DatePickerPag({ updateSelectedDateData }) {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedDateData, setSelectedDateData] = useState([]);
    const [error, setError] = useState(null);

    const handleDateChange = async (date) => {
        try {
            const response = await axios.get(`http://localhost:8000/${formatDate(date)}`);
            setSelectedDateData(response.data.data);
            setError(null);
            updateSelectedDateData(response.data.data);
        } catch (error){
            setSelectedDateData([]);
            setError("No hay horarios disponibles para la fecha seleccionada.");
            console.error("Error al obtener los datos de la API", error);
        }
        setSelectedDate(date);
    };

    useEffect(() => {
        if (selectedDate === null) {
            handleDateChange(new Date());
        }
    },  [selectedDate]);

    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    return (
        <div>
            <h6>Selecciona una fecha</h6>
            <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                placeholderText="Select a date..."
                inline
            />
            {selectedDate && (<h1>Selected Date: {selectedDate.toLocaleDateString()}</h1>)}
        </div>
    );
}