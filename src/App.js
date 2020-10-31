import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './pages';

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;

// npm cache clean --force && rm -rf node_modules package-lock.json && npm install
// rm -rf node_modules package-lock.json
// npm install