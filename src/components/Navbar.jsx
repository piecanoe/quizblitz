import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/">
        <h1>QuizBlitz</h1>
      </NavLink>

      <div className="navbar-links">
        <NavLink to="/film-tv">Film & TV</NavLink>
        <NavLink to="/music">Music</NavLink>
        <NavLink to="/arts-literature">Arts & Literature</NavLink>
        <NavLink to="/quiz" className="random-quiz-link">
          Random Quiz
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
