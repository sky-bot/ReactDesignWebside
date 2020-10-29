import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;

// npm cache clean --force && rm -rf node_modules package-lock.json && npm install
// rm -rf node_modules package-lock.json
// npm install