import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Commented out routing imports

function App() {
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState('light');

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#343a40';
      showAlert('Dark mode has been enabled', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
    }
  };

  const toggleMode1 = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#0a3622';
      showAlert('Green dark mode has been enabled', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
    }
  };

  const toggleMode2 = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#052c65';
      showAlert("Blue dark mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      {/* <Router> */} {/* Commented out Router */}
        <Navbar
          title="TextUtils"
          aboutText="About"
          Languages="Languages"
          mode={mode}
          toggleMode={toggleMode}
          toggleMode1={toggleMode1}
          toggleMode2={toggleMode2}
        />
        <Alert alert={alert}></Alert>
        <div className="container centered my-3">
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About />} mode={mode}/> */}
            {/* <Route exact path="/" element={<TextForm heading="Enter the text to analyse" mode={mode} showAlert={showAlert} />} /> */}
          {/* </Routes> */}
          <TextForm heading="Enter the text to analyse" mode={mode} showAlert={showAlert} /> {/* Retained TextForm */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
