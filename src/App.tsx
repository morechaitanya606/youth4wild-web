import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Opportunities from './pages/Opportunities';
import Contact from './pages/Contact';
import Learn from './pages/Learn';
import Contribute from './pages/Contribute';
import Connect from './pages/Connect';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="opportunities" element={<Opportunities />} />
          <Route path="contact" element={<Contact />} />
          <Route path="learn" element={<Learn />} />
          <Route path="contribute" element={<Contribute />} />
          <Route path="connect" element={<Connect />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
