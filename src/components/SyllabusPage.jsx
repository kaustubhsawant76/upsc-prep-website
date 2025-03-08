import React from "react";

const SyllabusPage = () => {
  const syllabus = [
    { id: 1, name: "GS Paper 1", topics: ["History", "Geography", "Polity"] },
    { id: 2, name: "GS Paper 2", topics: ["Governance", "Constitution", "Economy"] },
  ];

  return (
    <div className="py-10">
      <h1 className="text-3xl text-center font-bold mb-6">UPSC Syllabus</h1>
      <div className="container mx-auto">
        {syllabus.map((subject) => (
          <div key={subject.id} className="mb-6">
            <h2 className="text-2xl font-bold mb-2">{subject.name}</h2>
            <ul className="list-disc pl-6">
              {subject.topics.map((topic, index) => (
                <li key={index}>{topic}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SyllabusPage;