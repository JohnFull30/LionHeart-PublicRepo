// import react from "react";
import { useState } from "react";
// import { ReactDOM } from "react";
import "./App.css";
import StartScreen from "./startScreen";
import Company from "./CompanyOn";
import { Route, Routes } from 'react-router-dom'
import Company1 from "./CompanyOn1";
import Company2 from "./CompanyOn2";
import Company3 from "./CompanyOn3";
import Company4 from "./CompanyOn4";
import Company5 from "./CompanyOn5";
import Company6 from "./CompanyOn6";
import CoHome from "./CoHome";
import CoHome2 from "./CoHome2";
import CoHome3 from "./CoHome3";
import CoHome4 from "./CoHome4";
import CoHome5 from "./CoHome5";
import CoChat from "./CoChat";
import CoTeam from "./CoTeam";
import Navbar from "./Navbar";
import CoTeam2 from "./CoTeam2";
import CoTeam3 from "./CoTeam3";
import CoTeam4 from "./CoTeam4";


function App() {
  const [screenSubmitted, setScreenSubmitted] = useState("");

  console.log(screenSubmitted);
  return (
    <Routes>
      <Route path='/' element={(screenSubmitted === "" || screenSubmitted === "back") && (
        <StartScreen userSubmitted={setScreenSubmitted} />
      )} />
      <Route path='/onboarding-C'>
        <Route index element={<Company />} />
        <Route path='1' element={<Company1 />} />
        <Route path='2' element={<Company2 />} />
        <Route path='3' element={<Company3 />} />
        <Route path='4' element={<Company4 />} />
        <Route path='5' element={<Company5 />} />
        <Route path='6' element={<Company6 />} />
      </Route>
      <Route element={<Navbar />} >
        <Route path='/Company'>
          <Route index element={<CoHome />} />
          <Route path='2' element={<CoHome2 />} />
          <Route path='3' element={<CoHome3 />} />
          <Route path='4' element={<CoHome4 />} />
          <Route path='5' element={<CoHome5 />} />
        </Route>

        <Route path='/Team'>
          <Route index element={<CoTeam />} />
          <Route path='2' element={<CoTeam2 />} />
          <Route path='3' element={<CoTeam3 />} />
          <Route path='4' element={<CoTeam4 />} />
        </Route>
        <Route path='/Chat' element={<CoChat />} />

        {/* <Route path='/Team' element={<CoTeam />} /> */}

      </Route>



    </Routes>

  );
}

export default App;
