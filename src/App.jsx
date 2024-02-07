import Navbar from "./components/Navbar";
import Home from "./Home";
import "./style.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}
