import { NavLink } from "react-router-dom";

const Navbar = () => {
  const style = {
    color: "#ffffff",
    backgroundColor: "#1ED9D9",
    borderRadius: "8px",
  };

  return (
    <nav className="navbar">
      <NavLink to="/">
        <h1>Quizzical</h1>
      </NavLink>

      <div className="nav-links">
        {/* <NavLink to="/">Home</NavLink> */}
        <NavLink to="/film-tv">Film & TV</NavLink>
        <NavLink to="/music">Music</NavLink>
        <NavLink to="/arts-literature">Arts & Literature</NavLink>
        {/* <Link to="/create">Create A Quiz</Link> */}
        <NavLink to="/quiz" style={style}>
          Random
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
