import { NavLink } from "react-router-dom";

const Navbar = () => {
  const style = {
    color: "dark blue",
    backgroundColor: "lightgreen",
    borderRadius: "8px",
  };

  return (
    <nav className="navbar">
      <h1>Quizzical</h1>
      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        {/* <Link to="/create">Create A Quiz</Link> */}
        <NavLink to="/quiz" style={style}>
          Random Quiz
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
