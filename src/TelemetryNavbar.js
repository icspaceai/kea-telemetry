import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function TelemetryNavBar({brandName}) {
    return (
      <Navbar bg="light">
          <Container>
            <Navbar.Brand href="#">{brandName}</Navbar.Brand>
          </Container>
        </Navbar>
      )
  }
  