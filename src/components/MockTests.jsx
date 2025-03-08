import React, { useState } from "react";

const MockTests = () => {
  const [quiz, setQuiz] = useState([
    { id: 1, question: "What is the capital of India?", options: ["Delhi", "Mumbai", "Bangalore"], answer: "Delhi" },
    { id: 2, question: "Who is the current PM of India?", options: ["Narendra Modi", "Rahul Gandhi", "Arvind Kejriwal"], answer: "Narendra Modi" },
  ]);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);

  const submitQuiz = () => {
    let totalScore = 0;
    quiz.forEach((q) => {
      if (answers[q.id] === q.answer) totalScore++;
    });
    setScore(totalScore);
  };

  return (
    <div className="py-10">
      <h1 className="text-3xl text-center font-bold mb-6">Mock Tests</h1>
      <div className="container mx-auto">
        {quiz.map((q) => (
          <div key={q.id} className="mb-4">
            <h3 className="font-bold">{q.question}</h3>
            {q.options.map((option) => (
              <label key={option} className="block">
                <input
                  type="radio"
                  name={`q${q.id}`}
                  value={option}
                  onChange={(e) => setAnswers({ ...answers, [q.id]: e.target.value })}
                  className="mr-2"
                />
                {option}
              </label>
            ))}
          </div>
        ))}
        <button onClick={submitQuiz} className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
          Submit Quiz
        </button>
        {score > 0 && <p className="mt-4 font-bold">Your Score: {score}/{quiz.length}</p>}
      </div>
    </div>
  );
};

export default MockTests;