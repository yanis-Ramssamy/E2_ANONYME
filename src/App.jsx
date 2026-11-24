import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import CoursesPage from './pages/CoursesPage';
import InscriptionPage from './pages/InscriptionPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projets" element={<ProjectsPage />} />
          <Route path="/formations" element={<CoursesPage />} />
          <Route path="/inscription" element={<InscriptionPage />} />
          <Route path="*" element={<h1 className="container">Page introuvable</h1>} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
