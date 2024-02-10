import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");
  const [category, setCategory] = useState("Movies");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const quiz = { title, question, category };

    setIsLoading(true);

    fetch("http://localhost:8000/quizzes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(quiz),
    }).then(() => {
      console.log("quiz added!");
      setIsLoading(false);
      // history.go(-1);
      navigate("/");
    });
  };

  return (
    <div className="create">
      <h2>Create A Quiz</h2>
      <form onSubmit={handleSubmit}>
        <label>Quiz Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Quiz Question:</label>
        <textarea
          required
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        ></textarea>
        <label>Quiz Category:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="mario">Movies</option>
          <option value="yoshi">Music</option>
        </select>
        {!isLoading && <button>Add Quiz</button>}
        {isLoading && <button disabled>Adding quiz...</button>}
      </form>
    </div>
  );
};

export default Create;
