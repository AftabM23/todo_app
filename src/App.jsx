import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import InputSection from "./Pages/InputSection";
import LoginPage from "./Pages/LoginPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
        </Routes>
        <Routes>
          <Route path="/notes" element={<InputSection />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
