// import react from "react";
import { useState } from "react";
// import { ReactDOM } from "react";
import "./App.css";
import StartScreen from "./startScreen";

function App() {
  const [screenSubmitted, setScreenSubmitted] = useState("");

  console.log(screenSubmitted);
  return (
    <>
      {(screenSubmitted === "" || screenSubmitted === "back") && (
        <StartScreen userSubmitted={setScreenSubmitted} />
      )}
    </>
  );
}

export default App;
