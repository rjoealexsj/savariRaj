import React, { Component } from 'react'
import imag1 from '../src/images/IMG1.jpg'
import imag2 from '../src/images/IMG.jpg'
import imag3 from '../src/images/IMG2.jpg'

export default class Styleexamples extends Component {
    render() {
        return (
            <div>
            STYLE EXAMPLES
            <div>
       <h1 style={{color:'blue', fontSize:'40px', background:'yellow', paddingTop:'50%', paddingBottom:'50%', paddingLeft:'50%'}}>
       MY GALLERY 1
       </h1>
      
   
    <div>
  
    
     </div>
     
 <img src={imag1} 
   style={{width:'100px',border:'5px solid blue', borderTopColor:'yellowgreen', borderTopRightRadius:'5px', borderSpacing:'10'}} />
   <br/> 
   
   <div style={{textAlign:'center'}}>
    <h2 style={{color:'red', background:'green', paddingTop:'50%', paddingBottom:'50%', paddingLeft:'50%', fontSize:'40px', fontVariant:'full-width'}}>
    MY GALLERY2
      </h2>
    <br/>
   <img src={imag2} 
   style ={{width:'200px', borderRadius:'50%', border:'5px solid red'}} />
  
   </div>
   <div style={{textAlign:'right'}}>
     <h3 style={{color:'yellow', fontSize: '30px', background:'pink', paddingTop:'50%', paddingBottom:'50%', paddingLeft:'50%', fontStretch:'normal'}}>
     MY GALLERY3
     </h3>
    <br/>
   <img src={imag3} 
   style ={{width:'300px', borderRadius:'20%', border:'6px solid yellow'}} />

   </div>
<h5 style={{color:'blue', fontSize:'120px', fontStretch:'expanded', fontWeight:'bold'}}>
<center>
   THANK YOU 
  </center>
</h5>
  
   </div>

            </div>
        )
    }
}
