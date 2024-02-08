import QuizList from "./QuizList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: quizzes,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/quizzes");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {quizzes && <QuizList quizzes={quizzes} title="All Quizzes" />}
      {/* {questionSets && (
        <QuestionList
          questionSets={questionSets.filter(
            (question) => question.type == "movie"
          )}
          title="Movie Questions"
        />
      )} */}
    </div>
  );
};

export default Home;
