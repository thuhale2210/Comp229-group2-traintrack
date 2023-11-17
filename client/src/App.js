import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/login';
import CustomerHome from './components/customerHome';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<CustomerHome />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
