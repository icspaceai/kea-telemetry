import './App.css';
import React from 'react';
import TelemetryNavbar from './TelemetryNavbar'
import TelemetryUI from './TelemetryUi'

export default function App() {
  return (
  <>
   <TelemetryNavbar brandName="Kea"/>
    <TelemetryUI/>
  </>
 )
}
