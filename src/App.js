import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Question from "./pages/question";
import Result from "./pages/result";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />;
      <Route path="/question" element={<Question />} />;
      <Route path="/result" element={<Result />} />;
    </Routes>
  );
}

export default App;
