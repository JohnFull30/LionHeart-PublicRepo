// import react from "react";
import { useState } from "react";
// import { ReactDOM } from "react";
import "./App.css";
import StartScreen from "./startScreen";
import Company from "./Company";
import { Route, Routes } from 'react-router-dom'
import Company1 from "./Company1";
import Company2 from "./Company2";
import Company3 from "./Company3";
import Company4 from "./Company4";
import Company5 from "./Company5";
import Company6 from "./Company6";


function App() {
  const [screenSubmitted, setScreenSubmitted] = useState("");

  console.log(screenSubmitted);
  return (
    <Routes>
      <Route path='/' element={(screenSubmitted === "" || screenSubmitted === "back") && (
        <StartScreen userSubmitted={setScreenSubmitted} />
      )} />
      <Route path='/company'>
      <Route index element={<Company />} />
        <Route path='1' element={<Company1 />} />
        <Route path='2' element={<Company2 />} />
        <Route path='3' element={<Company3 />} />
        <Route path='4' element={<Company4 />} />
        <Route path='5' element={<Company5 />} />
        <Route path='6' element={<Company6 />} />
      </Route>
    </Routes>

  );
}

export default App;
