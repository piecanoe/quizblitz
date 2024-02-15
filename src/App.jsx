import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Create from "./views/Create";
import QuizPage from "./views/QuizPage";
import NotFound from "./components/NotFound";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/film-tv" element={<QuizPage tags="film_and_tv" />} />
            <Route path="/music" element={<QuizPage tags="music" />} />
            <Route
              path="/arts-literature"
              element={<QuizPage tags="arts-literature" />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
