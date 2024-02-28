import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DatePickerPag({ updateSelectedDateData }) {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div>
      <h6>Selecciona una fecha</h6>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => {
          setSelectedDate(date);
          updateSelectedDateData(date);
        }}
        placeholderText="Select a date..."
        inline
      />
    </div>
  );
}
