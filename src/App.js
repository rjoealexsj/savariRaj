import logo from './logo.svg';
import './App.css';
import imag1 from '../src/images/IMG1.jpg'
import imag2 from '../src/images/IMG.jpg'
import imag3 from '../src/images/IMG2.jpg'
function App() {
  return (
   <div>
     <div>
       <h1 style={{color:'blue', fontSize:'40px', background:'yellow'}}>
       MY GALLERY 1
       </h1>
      
   
    <div>
  
    </div>
     </div>
     
 <img src={imag1} 
   style={{width:'100px',border:'5px solid blue'}} />
   <br/> 
   
   <div style={{textAlign:'center'}}>
    <h2 style={{color:'red', background:'green'}}>
    MY GALLERY2
      </h2>
    <br/>
   <img src={imag2} 
   style ={{width:'200px', borderRadius:'50%', border:'5px solid red'}} />
  
   </div>
   <div style={{textAlign:'right'}}>
     <h3 style={{color:'yellow', fontSize: '30px', background:'pink'}}>
     MY GALLERY3
     </h3>
    <br/>
   <img src={imag3} 
   style ={{width:'300px', borderRadius:'20%', border:'6px solid yellow'}} />

   </div>
<h5 style={{color:'blue', fontSize:'120px'}}>
<center>
   THANK YOU 
  </center>
</h5>
  
   </div>

  );
}

export default App;
