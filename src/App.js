import React, { useState, useRef, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Wave from "@foobar404/wave";

import PrevBTN from "./component/PrevBTN";
import PlayandPauseBTN from "./component/PlayandPauseBTN";
import NextBTN from "./component/NextBTN";
import audios from "./static/audios";

import "./App.css";

function App() {
  const songRef = useRef(null);
  const [wave] = useState(new Wave());
  const [currentsongindex, setcurrentsongindex] = useState(0);
  const [ispause, setispause] = useState(true);
  const [haschange, sethaschange] = useState(false);
  const [songtime, setsongtime] = useState(0);
  const currentsong = audios[currentsongindex];

  useEffect(() => {
    window.document
      .getElementById("audioelement")
      .addEventListener("loadedmetadata", (e) => {
        songRef.current = e.target;
      });
    wave.fromElement("audioelement", "canvaselement", {
      type: "shine",
      colors: ["#98E805"],
    });
  }, []);

  const gotonextsong = (value) => {
    const nextsongindex = currentsongindex + value;
    const firstsong = 0;
    const lastsong = audios.length - 1;
    if (nextsongindex >= audios.length) {
      setcurrentsongindex(firstsong);
    } else if (nextsongindex < firstsong) {
      setcurrentsongindex(lastsong);
    } else {
      setcurrentsongindex(nextsongindex);
    }
    sethaschange(true);
    setispause(false);
  };

  return (
    <div className="root">
      <div className="container">
        <div className="image-container">
          <LazyLoadImage
           
            src={currentsong.img}
            width="150px"
            height="150px"
            
            className={`img ${!ispause ? "animation-spin" : ""}`}
          />
          <canvas width="350px" height="350px" id="canvaselement" />
        </div>
        <div className="song-info">
          <h1>{currentsong.songName}</h1>
          <p>{currentsong.singer}</p>
          <audio
            autoPlay={haschange}
            onEnded={() => gotonextsong(1)}
            src={currentsong.src}
            id="audioelement"
            onTimeUpdate={() => setsongtime(songRef.current.currentTime)}
          />
        </div>
        <div>
          <input
            value={songtime}
            type="range"
            min={0}
            max={songRef.current?.duration}
            className="input"
            onChange={(e) => (songRef.current.currentTime = e.target.value)}
          />
        </div>
        <div className="controler">
          <PrevBTN gotonextsong={gotonextsong} />
          <PlayandPauseBTN
            songRef={songRef}
            ispause={ispause}
            setispause={setispause}
          />
          <NextBTN gotonextsong={gotonextsong} />
        </div>
      </div>
    </div>
  );
}

export default App;
