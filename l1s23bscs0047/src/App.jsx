import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Page1 from './page1';
import Page2 from './page2';
import Page3 from './page3';
import './App.css';

function App() {
  return (
    <Router>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/">Page1</Link> |{" "}
        <Link to="/page2">Page2</Link> |{" "}
        <Link to="/page3">Page3</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
      </Routes>
    </Router>
  );
}

export default App;