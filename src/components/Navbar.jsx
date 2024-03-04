import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/">
        <h1>Quizzical</h1>
      </NavLink>

      <div className="navbar-links">
        {/* <NavLink to="/">Home</NavLink> */}
        <NavLink to="/film-tv">Film & TV</NavLink>
        <NavLink to="/music">Music</NavLink>
        <NavLink to="/arts-literature">Arts & Literature</NavLink>
        {/* <Link to="/create">Create A Quiz</Link> */}
        <NavLink to="/quiz" className="random-quiz-link">
          Random Quiz
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
