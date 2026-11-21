import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSkills from './components/AboutSkills';
import Footer from './components/Footer';
import Profile from './components/Profile';
import AllProjects from './components/ProjectPages/AllProjects';
import ProjectDetail from './components/ProjectPages/ProjectDetail';
import ProjectsContact from './components/ProjectsContact';


const Home = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <AboutSkills />
      <ProjectsContact />
    </main>
    <Footer />
  </>
);

// Remonte en haut au changement de page, ou va à la #section du lien.
const ScrollManager = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash]);
  return null;
};

function App() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;