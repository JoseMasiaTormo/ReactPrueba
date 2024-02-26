import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

export default function DatePickerPag({ date }) {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = async (date) => {
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