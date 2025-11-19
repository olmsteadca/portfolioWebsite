import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '@components/Layout/Layout';
import Home from '@pages/Home/Home';
import Projects from '@pages/Projects/Projects';
import About from '@pages/About/About';
import Blog from '@pages/Blog/Blog';
import BlogPage from '@pages/BlogPage/BlogPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Projects" element={<Projects />} />
          <Route path="Blog" element={<Blog />} />
          <Route path="/Blog/:id" element={<BlogPage />} />
          <Route path="About" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
