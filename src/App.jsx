import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '@/components/layout.jsx';
import Home from '@/pages/home/Home.jsx';
import Projects from '@/pages/projects/Projects.jsx';
import About from '@/pages/about/About.jsx';
import Updates from '@/pages/updates/Updates.jsx';
import UpdatePage from '@/pages/updates/UpdatePage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Projects" element={<Projects />} />
          <Route path="Updates" element={<Updates />} />
          <Route path="/Updates/:id" element={<UpdatePage />} />
          <Route path="About" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
