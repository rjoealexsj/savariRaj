import React, { Component } from 'react'
import { Col, FormGroup, Input, Label, Row,ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem,} from 'reactstrap';
export default class Home extends Component {
    render() {
        return (
            <div>
                 <div className='text-center p-4 bg-primary'>
      <h1 style={{color:'red'}}> Jesuit Residence </h1>     
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
{/*<button className='btn' style={{border:'2px solid blue'}}>Submit</button>*/}
<button className='btn' style={{border:'2px solid blue', display:'none'}}>Submit</button>
</div>
<ButtonDropdown
  toggle={function noRefCheck(){}}
>
  <DropdownToggle caret>
    Button Dropdown
  </DropdownToggle>
  <DropdownMenu>
    <DropdownItem header>
      Header
    </DropdownItem>
    <DropdownItem disabled>
      Action
    </DropdownItem>
    <DropdownItem>
      Another Action
    </DropdownItem>
    <DropdownItem divider />
    <DropdownItem>
      Another Action
    </DropdownItem>
  </DropdownMenu>
</ButtonDropdown>
            </div>
        )
    }
}
