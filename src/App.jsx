import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Home";
import Create from "./Create";
import QuizDetails from "./components/QuizDetails";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/quizzes/:id" element={<QuizDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
