import "./App.css";
import { Routes, Route } from "react-router-dom";
import Welcome from "./Components/Welcome";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} /> 
        {/* <Route path=""></Route> */}
      </Routes>
    </>
  )
}

export default App;
