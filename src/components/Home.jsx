import React from "react";

const Home = () => {
  return (
    <div className="hero min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://via.placeholder.com/1920x1080')" }}>
      <div className="overlay bg-black/60 h-full">
        <div className="container mx-auto flex items-center justify-center h-full text-center text-white">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Revolutionize Your UPSC Preparation</h1>
            <p className="text-lg md:text-xl mb-6">With FirstBench.ai, prepare smarter, not harder.</p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;