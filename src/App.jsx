import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Updates from './pages/Updates';
import GoodbyeMSWord from "./pages/goodbyeMSWord"

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="updates" element={<Updates />} />
                    <Route path="about" element={<About />} />
                    <Route path="GoodbyeMSWord" element={<GoodbyeMSWord /> }/>
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
