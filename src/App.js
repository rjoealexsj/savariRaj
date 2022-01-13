import logo from './logo.svg';
import './App.css';
import imag1 from '../src/images/IMG1.jpg'
import imag2 from '../src/images/IMG.jpg'
function App() {
  return (
   <div>
     <div>
       <h1>
       <center>
       MY GALLERY
       
       </center>
       </h1>
      
   
    <div>
  
    </div>
     </div>
     <center>
 <img src={imag1} 
   style ={{width:'300px', borderRadius:'50%'}} />
     </center>
     <img src={imag2} 
   style ={{width:'300px', borderRadius:'50%'}} />
<h5>
<center>
   THANK YOU 
  </center>
</h5>
  
   </div>

  );
}

export default App;
