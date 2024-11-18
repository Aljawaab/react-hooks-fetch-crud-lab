import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionList from "./QuestionList";
import QuestionForm from "./QuestionForm";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  function handleAddQuestion(newQuestion) {
    setQuestions([...questions, newQuestion]);
  }

  function handleChangePage(newPage) {
    setPage(newPage);
  }

  return (
    <div className="App">
      <AdminNavBar onChangePage={handleChangePage} />
      {page === "Form" ? (
        <QuestionForm onAddQuestion={handleAddQuestion} />
      ) : (
        <QuestionList questions={questions} setQuestions={setQuestions} />
      )}
    </div>
  );
}

export default App;
