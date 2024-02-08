import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState();
  const [question, setQuestion] = useState();

  return (
    <div className="create">
      <h2>Create A Quiz</h2>
      <form>
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
        <label>Quiz Answer:</label>
        <select>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        <button>Add Quiz</button>
        <p> {title} </p>
        <p> {question} </p>
      </form>
    </div>
  );
};

export default Create;
