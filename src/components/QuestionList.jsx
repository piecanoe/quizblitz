const QuestionList = ({ questionSets, title }) => {
  return (
    <div className="question-list">
      <h2>{title}</h2>
      {questionSets.map((question) => (
        <div className="question-preview" key={question.id}>
          <h2>Question: {question.title}</h2>
          <p>Answer: {question.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default QuestionList;
