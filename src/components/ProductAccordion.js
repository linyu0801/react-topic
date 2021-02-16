import { Accordion, Card } from 'react-bootstrap'
// import React, { useState, useEffect } from 'react'
// import { useAccordionToggle } from 'react-bootstrap/AccordionToggle'
// import { Card } from 'react-bootstrap/Accordion'

function ProductAccordion() {
  return (
    <>
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            <h5 className="k-note">產品資訊</h5>
            <i className="plus-icon fas fa-plus"></i>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            Click me!
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="2">
            Click me!
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </>
  )
}

export default ProductAccordion
