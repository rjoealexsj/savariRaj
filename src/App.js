import logo from './logo.svg';
import './App.css';
import './css/bootstrap.min.css';
import IDNavbar from './components/IDNavbar.js';
import Home from './components/Home';

import { Col, FormGroup, Input, Label, Row} from 'reactstrap';

function App() {
  return (
  <div className='container' style={{paddingTop:'50px'}}>
    <div className='text-center p-4 bg-primary'>
      <h1 style={{color:'white'}}>Vidyajyoti Jesuit Residence </h1>     
    </div>
    <FormGroup style={{overflow:"visible", paddingTop:'50px'}}>
    <Row style={{marginBottom:'20px'}}>
    
    <Col xs={3} lg={2}>
    <Label for="usernameL">Name</Label>
    </Col>
    <Col xs={9} lg={4}>
    <Input type="text" placeholder='Enter Your Name' value="" />
    </Col>
    <Col xs={3} lg={2}>
    <Label for="usernameL">Password</Label>
    </Col>
    <Col xs={9} lg={4}>
    <Input type="password" placeholder='Enter Your Password' value="" />
    </Col>

    </Row>

    <Row style={{marginBottom:'20px'}}>

    <Col xs={3} lg={2}>
   <Label for="usernameL">Email</Label>
   </Col>
   <Col xs={9} lg={4}>
   <Input type="text" placeholder='Enter Your Email' value="" />
   </Col>
   <Col xs={3} lg={2}>
   <Label for="usernameL">Phone Number</Label>
    </Col>
    <Col xs={9} lg={4}>
    <Input type="text" placeholder='Enter Your Phone Number' value="" />
    </Col>>
    </Row>

<Row style={{marginBottom:'20px'}}>
<Col xs={3} lg={2}>
    <Label for="Province">Province</Label>
    </Col>
    <Col xs={9} lg={4}>
    <Input type="text" placeholder='Enter Your Province' value="" />
    </Col>
    <Col xs={3} lg={2}>
    <Label for="dob">Date of Birth'</Label>
    </Col>
    <Col xs={9} lg={4}>
    <Input type="text" placeholder='Enter Your Date of Birth' value="" /> 
      </Col>
</Row>

<Row style={{marginBottom:'20px'}}>
<Col xs={3} lg={2}>
    <Label for="Blood">Blood Group</Label>
    </Col>
    <Col xs={9} lg={4}>
    <Input type="text" placeholder='Enter Your Blood Group' value="" />
    </Col>
    <Col xs={3} lg={2}>
    <Label for="roomno">Room No'</Label>
    </Col>
    <Col xs={9} lg={4}>
    <Input type="text" placeholder='Enter Your Room No' value="" /> 
      </Col>
</Row>

</FormGroup>
<div className='text-center'>
<button className='btn' style={{border:'2px solid blue'}}>Submit</button>
</div>

</div>
  );
}

export default App;
