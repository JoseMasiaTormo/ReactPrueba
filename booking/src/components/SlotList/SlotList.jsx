import React, { useState } from "react";
import Slot from "../Slot/Slot";
import { LoadingList } from "../_components/LoadingSlot";
import { EmptySlot } from "../_components/EmptySlot";

export default function SlotList({ selectedDateData }) {
  const [isLoading, setLoading] = useState(false);

  SlotList.setLoading = (loading) => {
    setLoading(loading);
  };

  if (isLoading) {
    return <LoadingList />;
  }

  if (!selectedDateData || selectedDateData.length === 0) {
    return <EmptySlot />;
  }

  return (
    <div className="center-div">
      <div className="list-items">
        <div>
          <p>Selecciona las sesiones</p>
          <br />
        </div>
        <div className="slots-container">
          {selectedDateData.map((slot) => (
            <div key={slot.startTime} className="list-item">
              <Slot slot={slot} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
