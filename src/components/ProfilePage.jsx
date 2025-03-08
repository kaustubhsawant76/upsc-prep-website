import React from "react";

const ProfilePage = () => {
  const user = {
    name: "John Doe",
    savedMaterials: ["Indian Polity", "World Geography"],
    testScores: [{ quiz: "Quiz 1", score: 8 }, { quiz: "Quiz 2", score: 6 }],
  };

  return (
    <div className="py-10">
      <h1 className="text-3xl text-center font-bold mb-6">My Profile</h1>
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Welcome, {user.name}!</h2>
        <h3 className="text-lg font-bold mb-2">Saved Materials:</h3>
        <ul className="list-disc pl-6 mb-6">
          {user.savedMaterials.map((mat, index) => (
            <li key={index}>{mat}</li>
          ))}
        </ul>
        <h3 className="text-lg font-bold mb-2">Test Scores:</h3>
        <ul className="list-disc pl-6">
          {user.testScores.map((score, index) => (
            <li key={index}>
              {score.quiz}: {score.score}/10
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfilePage;