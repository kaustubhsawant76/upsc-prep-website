import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import AISection from "./components/AISection";
import MockTests from "./components/MockTests";
import StudyMaterials from "./components/StudyMaterials";
import SyllabusPage from "./components/SyllabusPage";
import CurrentAffairsPage from "./components/CurrentAffairsPage";
import ProfilePage from "./components/ProfilePage";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai-learning" element={<AISection />} />
        <Route path="/syllabus" element={<SyllabusPage />} />
        
        <Route path="/mock-tests" element={<MockTests />} />
        <Route path="/study-materials" element={<StudyMaterials />} />
        <Route path="/current-affairs" element={<CurrentAffairsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
