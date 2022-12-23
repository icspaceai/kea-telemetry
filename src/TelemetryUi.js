import React, { useState, useRef, useEffect } from "react";
import * as d3 from "d3";
import 'd3-attrs';

export default function TelemetryUi() {
  const svgRef = useRef();
  const [data, setData] = useState({});

  useEffect(() => {
    let ws = new WebSocket("ws://10.0.0.132:80/ws");
    ws.onmessage = (e) => {
      setData(JSON.parse(e.data));
    };
    // setting up svg
    const attributes = {width:500, height: 200}
    const style = {background: '#d3d3d3', marginTop: 50}
    const svg = d3.select(svgRef.current).attrs(attributes).styles(style)

    // setting the scaling

    // set the axes

    // setting up the data for svg
  }, [data]);

  let { pitch, yaw, roll, altitude } = data;

  return (
    <div className="App">
      <div className="Telemetry-text-border">
        <h3>Raw Telemetry</h3>
        <p>
          Pitch: {pitch} °&emsp; Yaw: {yaw} °&emsp; Roll: {roll} °
        </p>
        <p>Altitude: {altitude} </p>
      </div>
      <svg ref={svgRef}></svg>
    </div>
  );
}
