import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React , {useState} from 'react'
import Alert from './components/Alert'
// import ReactDOM from "react-dom/client";
// import { BrowserRouter , Route , Routes} from 'react-router-dom';

// import {
//   BrowserRouter,
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";



let name = <b> Abhay </b>;
// let name = " Abhay";
function App() {
  const [mode, setMode] = useState('light');
  const [alert , setAlert] = useState(null);
  
  const showAlert = (message,type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    },2000)
  }

  const toggleMode =()=>{
    if (mode === 'light'){
      setMode("dark");
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled" ,"success");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled" ,"success");
    }
  }

  return (
    <>
        {/* <BrowserRouter> */}
        
       <Navbar title="textUtils"  mode={mode} toggleMode={toggleMode} />
     <Alert alert={alert}/>
       <div className='container my-3'>
         {/* <Routes> */}
          {/* <Route path='/about' element ={ <About/>    } > */}
              
          {/* </Route> */}
         {/* <Route path='/' element={  <TextForm showAlert={showAlert} heading="Enter The text to analyze below" mode={mode} /> }> */}
          
         <TextForm showAlert={showAlert} heading="Enter The text to analyze below" mode={mode} />

         {/* </Route> */}

         {/* </Routes> */}
        
     </div>
        {/* </BrowserRouter> */}


    </>
  );
}

export default App;


 {/* <h1>this is me</h1>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with Abhay
        </a>
      </header>
    </div> */}