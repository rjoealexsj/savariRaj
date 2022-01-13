import logo from './logo.svg';
import './App.css';
import imag1 from '../src/images/IMG1.jpg'
import imag2 from '../src/images/IMG.jpg'
function App() {
  return (
   <div>
     <div>
       <h1>
       MY GALLERY 1
       
       
       </h1>
      
   
    <div>
  
    </div>
     </div>
     
 <img src={imag1} 
   style ={{width:'100px',}} />
   <br/> 
   
   <div style={{textAlign:'center'}}>
    MY GALLERY2
    <br/>
   <img src={imag2} 
   style ={{width:'200px', borderRadius:'50%'}} />
  
   </div>
   <div style={{textAlign:'right'}}>
    MY GALLERY2
    <br/>
   <img src={imag2} 
   style ={{width:'300px', borderRadius:'20%'}} />
  
   </div>
<h5>
<center>
   THANK YOU 
  </center>
</h5>
  
   </div>

  );
}

export default App;
