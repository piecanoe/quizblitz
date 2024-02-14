import QuizPage from "./QuizPage";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/quiz");
  };

  return (
    <div className="home">
      <h1>Quizzical</h1>
      <h2>Test Your Knowledge!</h2>
      <Link to="/quiz">
        <button type="button" onClick={handleClick}>
          Start A Quiz!
        </button>
      </Link>
    </div>
  );
};

export default Home;
