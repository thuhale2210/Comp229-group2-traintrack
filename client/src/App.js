import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/login';
import CustomerHome from './components/customerHome';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            {/* Don't forget to change the element to the correct component */}
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<CustomerHome />} />
            <Route path='/fitness-tracker' element={<CustomerHome />} />
            <Route path='/exercises' element={<CustomerHome />} />
            <Route path='/appointment' element={<CustomerHome />} />
            <Route path='/profile' element={<CustomerHome />} />
          </Routes>
        </Router>
        <Footer />
      </header>
    </div>
  );
}

export default App;
