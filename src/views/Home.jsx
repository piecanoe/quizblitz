import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = (targetPage) => {
    navigate(targetPage);
  };

  return (
    <div className="home-page">
      <section className="home-hero">
        <div className="home-hero-text">
          <h1 className="home-hero-title">Quizzical</h1>
          <h2 className="home-hero-tagline">
            Unlock Knowledge,
            <br />
            Test Your Wits!
          </h2>
          <Link to="/quiz">
            <button
              className="home-hero-button"
              type="button"
              onClick={handleClick}
            >
              Start A Quiz!
            </button>
          </Link>
        </div>
        <div className="home-hero-img">
          <img src="./src/img/brain.png" width="450px" />
        </div>
      </section>
    </div>
  );
};

export default Home;
