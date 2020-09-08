import React,{useState} from 'react';
import {Tab,Row,Col,Nav,Sonnet} from 'react-bootstrap'
export default ()=>{
    const [colorsx,setColors]=useState(['#EF3232','#EFDC32','#B9A1A1','#3267EF','#9032EF','#6EEF32','#451E1E','#3A585F','#EF32BA','#EFDC32','#B9A1A1','#3267EF','#9032EF','#3267EF','#9032EF','#6EEF32','#451E1E','#3A585F']);
    return <>
    <div className="toolNav">
        <img src={require('../images/logo.png')}/>
    </div>
   <div className="row">
    <div className="col-md-4">
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        
        <Nav.Item>
          <Nav.Link eventKey="first"><img src={require('../images/icons/a1.png')}/>
          </Nav.Link>
          
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second"><img src={require('../images/icons/a2.png')}/></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="thrd"><img src={require('../images/icons/a3.png')}/></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="4th"><img src={require('../images/icons/a4.png')}/></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="5th"><img src={require('../images/icons/a6.png')}/></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="6th"><img src={require('../images/icons/a7.png')}/></Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
            <div style={{width:150,height:30,backgroundColor:' #EEEEEE'}}>
            3D Packaging Tool
            </div>
            <p style={{marginTop:10}}>Product Color</p>
            <div style={{display:'flex',flexWrap:'wrap'}}>

                {colorsx.map(x=> <div style={{width: 27.66,
height: 27.66,backgroundColor:'#EF32BA',borderRadius:27,marginRight:10}}></div>

)}
                    </div>
        </Tab.Pane>
        <Tab.Pane eventKey="second">

        </Tab.Pane>
        <Tab.Pane eventKey="thrd">

        </Tab.Pane>
        <Tab.Pane eventKey="4th">

        </Tab.Pane>
        <Tab.Pane eventKey="5th">

        </Tab.Pane>
        <Tab.Pane eventKey="7th">

</Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
    </div>
    </div>

    </>
}