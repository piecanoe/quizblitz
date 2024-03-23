import { Link, useNavigate } from 'react-router-dom';
import brainImage from '/src/img/brain.png';

const Home = () => {
  const navigate = useNavigate();

  const handleClick = (targetPage) => {
    navigate(targetPage);
  };

  return (
    <div className="home-page">
      <section className="home-hero">
        <div className="home-hero-text">
          <h1 className="home-hero-title">QuizBlitz</h1>
          <h2 className="home-hero-tagline">
            Where Culture Takes
            <br />
            Center Stage!
          </h2>
          <Link to="/quiz">
            <button
              className="home-hero-button"
              type="button"
              onClick={handleClick}
            >
              Start Quiz!
            </button>
          </Link>
        </div>
        <div className="home-hero-img">
          <img src={brainImage} width="450px" alt="Brain image" />
        </div>
      </section>
    </div>
  );
};

export default Home;
