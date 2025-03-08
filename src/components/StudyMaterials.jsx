import React, { useState } from "react";

const StudyMaterials = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const materials = [
    { id: 1, title: "Indian Polity", type: "PDF", url: "#" },
    { id: 2, title: "World Geography", type: "Video", url: "#" },
  ];

  const filteredMaterials = materials.filter((mat) =>
    mat.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="py-10">
      <h1 className="text-3xl text-center font-bold mb-6">Study Materials</h1>
      <div className="container mx-auto">
        <input
          type="text"
          className="w-full p-2 border rounded-md mb-4"
          placeholder="Search materials..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <ul className="space-y-4">
          {filteredMaterials.map((material) => (
            <li key={material.id} className="p-4 bg-gray-100 rounded-md shadow-sm">
              <h3 className="text-lg font-bold">{material.title}</h3>
              <p>Type: {material.type}</p>
              <a href={material.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                View Material
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StudyMaterials;