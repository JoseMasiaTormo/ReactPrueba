import React from "react";

export default function Slot({ slot: {startTime, usersAvailable, state}}) {
    if (state === "SLOT_LOADING") {
        return (
            <div className="loading-item">
                <div class="spinner"></div>
            </div>
        );
    } else {
        return (
            <div className={`slot ${state}`}>
                <div className="start">
                    <p>{startTime}</p><input type="checkbox" className="checkbox-round" checked={state === "SLOT_CHECKED"} disabled={state === "SLOT_DISABLED"}/>
                </div>
                <div className="users">
                    <p>0 / {usersAvailable}</p>
                </div>
            </div>
        );
    }
}