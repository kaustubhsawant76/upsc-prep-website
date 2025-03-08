import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">FirstBench.ai</h1>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-gray-300 transition">Home</Link>
          </li>
          <li>
            <Link to="/syllabus" className="hover:text-gray-300 transition">Syllabus</Link>
          </li>
          <li>
            <Link to="/study-materials" className="hover:text-gray-300 transition">Study Materials</Link>
          </li>
          <li>
            <Link to="/mock-tests" className="hover:text-gray-300 transition">Mock Tests</Link>
          </li>
          <li>
            <Link to="/current-affairs" className="hover:text-gray-300 transition">Current Affairs</Link>
          </li>
          <li>
            <Link to="/profile" className="hover:text-gray-300 transition">Profile</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;