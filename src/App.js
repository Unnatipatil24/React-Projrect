import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';

function App() {
  const [alert, setAlert] = useState(null);

 const showAlert =(message, type)=>{
  
    setAlert({
      msg: message,
      type: type
    })
    
 }

  return (
<>
<Navbar V="TextUtil"></Navbar>
<Alert alert="This is Alert"/>
<div className='container'>
<TextForm heading='Enter Text Here'></TextForm>
{/* <About/> */}

</div>
  
</>
  );
}

export default App;
