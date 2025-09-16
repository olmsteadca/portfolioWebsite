import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '@/components/layout.jsx';
import Home from '@/pages/home/Home.jsx';
import Projects from '@/pages/projects/Projects.jsx';
import About from '@/pages/about/About.jsx';
import Updates from '@/pages/updates/Updates.jsx';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="updates" element={<Updates />} />
                    <Route path="about" element={<About />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
