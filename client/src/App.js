import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './components/login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path='/' element={<Login />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
