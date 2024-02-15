import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = (targetPage) => {
    navigate(targetPage);
  };

  return (
    <div className="home-page">
      <h1>Quizzical</h1>
      <h2>Test Your Knowledge!</h2>
      <Link to="/quiz">
        <button type="button" onClick={handleClick}>
          Start A Quiz!
        </button>
      </Link>
      <Link to="/film-tv">
        <button type="button" onClick={handleClick}>
          Film & TV
        </button>
      </Link>
      <Link to="/music">
        <button type="button" onClick={handleClick}>
          Music
        </button>
      </Link>
      <Link to="/arts-literature">
        <button type="button" onClick={handleClick}>
          Arts & Literature
        </button>
      </Link>
    </div>
  );
};

export default Home;
