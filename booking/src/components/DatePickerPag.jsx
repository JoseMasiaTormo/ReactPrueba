import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

export default function DatePickerPag({ updateSelectedDateData }) {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
        updateSelectedDateData(date);
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
        </div>
    );
}