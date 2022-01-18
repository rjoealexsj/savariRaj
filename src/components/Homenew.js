import React, { Component } from 'react'

export default class Homenew extends Component {
    render() {
        return (
            <div>
              <div style={{backgroundColor:'skyblue', paddingTop:'30px'}} id="topbar" className="d-flex align-items-center fixed-top">
    <div className="container d-flex align-items-center justify-content-center justify-content-md-between">
      <div className="align-items-center d-none d-md-flex">
        <i className="bi bi-clock"></i> Monday - Saturday, 8AM to 10PM
      </div>
      <div className="d-flex align-items-center">
        <i className="bi bi-phone"></i> Call us now +1 5589 55488 55
      </div>
    </div>
    </div>
    <div className="container d-flex align-items-center">

    <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt=""></a>

 <h1 className="logo me-auto"><a href="index.html">Medicio</a></h1>

<nav id="navbar" className="navbar order-last order-lg-0">
  <ul>
    <li><a className="nav-link scrollto " href="#hero">Home</a></li>
    <li><a className="nav-link scrollto" href="#about">About</a></li>
    <li><a className="nav-link scrollto" href="#services">Services</a></li>
    <li><a className="nav-link scrollto" href="#departments">Departments</a></li>
    <li><a className="nav-link scrollto" href="#doctors">Doctors</a></li>
    <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
      <ul>
        <li><a href="#">Drop Down 1</a></li>
        <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
          <ul>
            <li><a href="#">Deep Drop Down 1</a></li>
            <li><a href="#">Deep Drop Down 2</a></li>
            <li><a href="#">Deep Drop Down 3</a></li>
            <li><a href="#">Deep Drop Down 4</a></li>
            <li><a href="#">Deep Drop Down 5</a></li>
          </ul>
        </li>
        <li><a href="#">Drop Down 2</a></li>
        <li><a href="#">Drop Down 3</a></li>
        <li><a href="#">Drop Down 4</a></li>
      </ul>
    </li>
    <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
  </ul>
  <i className="bi bi-list mobile-nav-toggle"></i>
</nav> 

<a href="#appointment" className="appointment-btn scrollto"><span className="d-none d-md-inline">Make an</span> Appointment</a>

</div>





     








            </div>
        )
    }
}