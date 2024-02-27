import React, { useState } from "react";

export default function Slot({ slot: {startTime, usersAvailable, state: propState}}) {
    const initialState = usersAvailable === 0 ? 'SLOT_DISABLED' : propState;
    const [state, setState] = useState(initialState);

    function handleSlotClick() {
        let newState;

        switch (state) {
            case 'SLOT_DEFAULT':
                newState = 'SLOT_SELECTED';
                break;
            case 'SLOT_SELECTED':
                newState = 'SLOT_DEFAULT';
                break;
            default:
                newState = state;
                break;
        }
        setState(newState);
    }

    if (state === "SLOT_LOADING") {
        return (
            <div className="loading-item">
                <div class="spinner"></div>
            </div>
        );
    } else {
        return (
            <div className={`slot ${state}`} onClick={handleSlotClick}>
                <div className="start">
                    <p>{startTime}</p><input type="checkbox" className="checkbox-round" checked={state === "SLOT_CHECKED"} disabled={state === "SLOT_DISABLED"}/>
                </div>
                <div className="users">
                    <p>{17 - usersAvailable}/17</p>
                </div>
            </div>
        );
    }
}