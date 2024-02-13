import { Link } from "react-router-dom";

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
        <Link to="/">Home</Link>
        {/* <Link to="/create">Create A Quiz</Link> */}
        <Link to="/quizzes" style={style}>
          Quizzes
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
