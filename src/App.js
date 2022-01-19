import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css'
import IDNavbar from './components/IDNavbar.js';
import Homenew from './components/Homenew';
import Styleexamples  from './components/Styleexamples';
import SliderCorousel from './components/SliderCorousel';

function App() {
  return (
  <div className='container' style={{paddingTop:'50px'}}>
  
 {/* <IDNavbar/> */}
  <Homenew />
<SliderCorousel />

{/*
   
   <Styleexamples/>
*/}
</div>
  );
}

export default App;
