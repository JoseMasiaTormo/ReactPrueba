import React from "react";
import Slot from "./Slot";

export default function SlotList({ isLoading, slots }) {
    const LoadingRow = (
        <div className="loading-item">
            <div class="spinner"></div>
        </div>
    );

    if (isLoading) {
        return (
            <div className="list-items" data-testid="loading" key={"loading"}>
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
            </div>
        );
    }

    if (slots.length === 0) {
        return (
            <div className="list-items" key={"empty"} data-testid="empty">
                <p>No hay Slots</p>
            </div>
        );
    }

    return (
        <div className="list-items">
            {slots.map((slot) => (
                <Slot key={slot.startTime} slot={slot}/>
            ))}
        </div>
    )
}