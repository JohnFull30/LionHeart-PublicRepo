// import react from "react";
import { useState } from "react";
// import { ReactDOM } from "react";
import "./App.css";
import StartScreen from "./startScreen";
import Company from "./Company";
import { Route, Routes } from 'react-router-dom'


function App() {
  const [screenSubmitted, setScreenSubmitted] = useState("");

  console.log(screenSubmitted);
  return (
    <Routes>
        <Route path='/' element={(screenSubmitted === "" || screenSubmitted === "back") && (
        <StartScreen userSubmitted={setScreenSubmitted} />
      )} />
        <Route path='/company' element={<Company />} />
      </Routes>

  );
}

export default App;
