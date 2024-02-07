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
        <a href="/">Home</a>
        <a href="/quiz" style={style}>
          Start Quiz!
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
