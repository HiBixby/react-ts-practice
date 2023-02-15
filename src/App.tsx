import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import reactLogo from './assets/react.svg'
import Home from "./views/Home"
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
