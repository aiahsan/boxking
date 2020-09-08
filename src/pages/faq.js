import React from 'react';
import { Accordion, Card, Button } from "react-bootstrap";
import { BsChevronUp } from "react-icons/bs";
import NavBar from '../components/navbar';
import Footer from '../components/home/footer'
export default ()=>{
    return <>
        <NavBar/>
        <div className="container mb-50">

<section className="card-main ">
    <div className="faqHeading">
    <h3 style={{textAlign:'center'}}>Have Questions..?</h3>
    <p className="mb-4" style={{textAlign:'center'}}>Find some mostly asked question here.</p>
</div>
<Accordion defaultActiveKey="0">
        <Card>
          <Card.Header className="accordian-Header">
            <Accordion.Toggle
              className="accordian-toggle-specs"
              variant="link"
              eventKey="0"
            >
              <div><p className="accoridan-specs-font">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p></div>
              <div><BsChevronUp style={{color:'#A6C94A'}}/> </div>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header className="accordian-Header">
            <Accordion.Toggle
              className="accordian-toggle-specs"
              variant="link"
              eventKey="1"
            >
              <div><p className="accoridan-specs-font">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p></div>
              <div><BsChevronUp style={{color:'#A6C94A'}}/> </div>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header className="accordian-Header">
            <Accordion.Toggle
              className="accordian-toggle-specs"
              variant="link"
              eventKey="2"
            >
              <div><p className="accoridan-specs-font">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p></div>
              <div><BsChevronUp style={{color:'#A6C94A'}}/> </div>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header className="accordian-Header">
            <Accordion.Toggle
              className="accordian-toggle-specs"
              variant="link"
              eventKey="3"
            >
              <div><p className="accoridan-specs-font">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p></div>
              <div><BsChevronUp style={{color:'#A6C94A'}}/> </div>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header className="accordian-Header">
            <Accordion.Toggle
              className="accordian-toggle-specs"
              variant="link"
              eventKey="4"
            >
              <div><p className="accoridan-specs-font">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p></div>
              <div><BsChevronUp style={{color:'#A6C94A'}}/> </div>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="4">
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header className="accordian-Header">
            <Accordion.Toggle
              className="accordian-toggle-specs"
              variant="link"
              eventKey="5"
            >
              <div><p className="accoridan-specs-font">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p></div>
              <div><BsChevronUp style={{color:'#A6C94A'}}/> </div>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="5">
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
</section>
</div>
<Footer/>
    </>
}