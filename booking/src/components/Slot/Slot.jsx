import React, { useState } from "react";
import { LoadingRow } from "../_components/LoadingSlot";

export default function Slot({ slot: { startTime, usersAvailable, state: propState } }) {
  const initialState = usersAvailable <= 0 ? "SLOT_DISABLED" : propState;
  const [state, setState] = useState(initialState);

  function handleSlotClick() {
    let newState;

    switch (state) {
      case "SLOT_DEFAULT":
      case undefined:
        newState = "SLOT_SELECTED";
        break;
      case "SLOT_SELECTED":
        newState = "SLOT_DEFAULT";
        break;
      default:
        newState = state;
        break;
    }
    setState(newState);
  }

  let availability = 17 - usersAvailable;

  if (usersAvailable > 17) {
    availability = 0;
  } else if (usersAvailable < 0) {
    availability = 17;
  }

  if (state === "SLOT_LOADING") {
    return <LoadingRow />;
  }

  return (
    <div className={`slot ${state}`} onClick={handleSlotClick}>
      <div className="start">
        <p>{startTime}</p>
        <input
          type="checkbox"
          className="checkbox-round"
          checked={state === "SLOT_CHECKED"}
          disabled={state === "SLOT_DISABLED"}
        />
      </div>
      <div className="users">
        <p>{availability}/17</p>
      </div>
    </div>
  );
}
