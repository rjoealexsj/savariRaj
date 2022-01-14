import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import IDNavbar from './components/IDNavbar.js';



import Home from './components/Home';

function App() {
  return (
  <div className='container' style={{paddingTop:'50px'}}>
  <IDNavbar/>



   <Home />
</div>
  );
}

export default App;
