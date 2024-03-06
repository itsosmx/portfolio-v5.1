import React from "react";
import "./styles.css";

export default function Loader({ fullscreen }: { fullscreen?: boolean }) {
  return (
    <div className={fullscreen ? "fullscreen" : ""}>
      <div className="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {fullscreen && <p>Loading..</p>}
    </div>
  );
}
