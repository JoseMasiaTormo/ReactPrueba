import React, { useState } from "react";
import Slot from "./Slot";

export default function SlotList({ selectedDateData, slots }) {
    const [isLoading, setLoading] = useState(false);

    const setLoadingState = (loading) => {
        setLoading(loading);
    };

    SlotList.setLoading = setLoadingState;
    const LoadingRow = (
        <div className="loading-item">
            <div className="spinner"></div>
        </div>
    );

    if (isLoading) {
        return (
            <div className="loading-container">
                {[...Array(14)].map((_, index) => (
                    <div key={`loading-${index}`} className="list-item">
                        {LoadingRow}
                    </div>
                ))}
            </div>
        );
    }

    const dataToRender = selectedDateData || slots;

    if (!dataToRender || dataToRender.length === 0) {
        return (
            <div className="list-items" key={"empty"} data-testid="empty">
                <div className="empty-slots">
                    <p>No hay sesiones disponibles para este día.</p>
                    <p>Prueba otro día.</p>
                </div>
            </div>
        );
    }

    const slotsWithDefault = dataToRender.map((slot) => ({
        ...slot,
        state: 'SLOT_DEFAULT',
    }));

    return (
        <div className="center-div">
            <div className="list-items">
                <div>
                    <p>Selecciona las sesiones</p><br/>
                </div>
                <div className="slots-container">
                    {slotsWithDefault.map((slot) => (
                        <div key={slot.startTime} className="list-item">
                            <Slot slot={slot}/>
                        </div>
                        ))
                    }
                </div>
        </div>
        </div>
    )
}