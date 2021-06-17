import "./App.css";
import Question from "./components/Question/Question.js";
import CategoryList from "./components/CategoryList/CategoryList.js";
import QuestionByCategoryList from "./components/QuestionByCategoryList/QuestionByCategoryList.js";
import QuestionList from "./components/QuestionList/QuestionList.js";

function App() {
  return (
    <div>
      <Question />
      <CategoryList />
      <QuestionByCategoryList />
      <QuestionList />
    </div>
  );
}

export default App;
