import React from "react";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PrevBTN({ gotonextsong }) {
  return (
    <div>
      <FontAwesomeIcon
        onClick={() => gotonextsong(-1)}
        size="3x"
        color="white"
        className="btn"
        icon={faChevronLeft}
      />
    </div>
  );
}
