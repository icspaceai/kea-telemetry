import './App.css';
import React, { useState, useRef, useEffect } from 'react';
import * as d3 from "d3";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from './parrot.svg'

export default function App() {
  return (
  <>
   <TelemtryNavBar/>
    <TelemtryUi/>
  </>
 )
}

function TelemtryNavBar() {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        KEA
      </Navbar.Brand>
    </Container>
  </Navbar>
    )
}

function TelemtryUi() {
  const svgRef = useRef();
  const [data, setData] = useState([]);

  useEffect(() => {
    var ws  = new WebSocket("ws://10.0.0.132:80/ws");
       ws.onmessage = (e) => { 
        setData(JSON.parse(e.data));
      }
      // setting up svg
      const w = 500;
      const h = 200;
      const svg = d3.select(svgRef.current)
      .attr('width', w)
      .attr('height', h)
      .style('background', '#d3d3d3')
      .style('margin-top', '50')

      // setting the scaling

      // set the axes

      // setting up the data for svg


  }, [data])

  console.log(data)
  return (
    <div className="App">
    <div className="Telemtry-text-border">
      <h3>Raw Telemtry</h3>
      <p>Pitch: {data.pitch} °&emsp; Yaw: {data.yaw} °&emsp; Roll: {data.roll} °</p>
      <p>Altitude: {data.altitude} m</p>
    </div>
      <svg ref={svgRef}></svg> 
    </div>
  
  );
}

