import React from "react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NextBTN({ gotonextsong }) {
  return (
    <div>
      <FontAwesomeIcon
        onClick={() => gotonextsong(1)}
        color="white"
        size="3x"
        className="btn"
        icon={faChevronRight}
      />
    </div>
  );
}
