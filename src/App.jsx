import { MyContext } from "./ContextApi/ContextApi";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "./Component/Login Route/AuthPage";
import HomePage from "./Component/HomePage/HomePage";
import { useContext } from "react";

import "./App.css";

function App() {
  const { darkMode } = useContext(MyContext);

  return (
    <Router>
      <div className={`App ${darkMode ? "darkMode" : ""}`}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<AuthPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
