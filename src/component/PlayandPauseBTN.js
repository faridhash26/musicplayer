import React from "react";
import { faPlayCircle, faPauseCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PlayandPauseBTN({ ispause, songRef, setispause }) {
  return (
    <div>
      {ispause ? (
        <FontAwesomeIcon
          onClick={() => {
            songRef.current.play();
            setispause(!ispause);
          }}
          color="white"
          size="6x"
          className="btn"
          icon={faPlayCircle}
        />
      ) : (
        <FontAwesomeIcon
        onClick={() => {
          songRef.current.pause();
          setispause(!ispause);
        }}
          color="white"
          size="6x"
          className="btn"
          icon={faPauseCircle}
        />
      )}
    </div>
  );
}
