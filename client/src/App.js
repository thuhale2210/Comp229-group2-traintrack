import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './components/pages/landingPage';
import CustomerHome from './components/pages/customerHomePage';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            {/* Don't forget to change the element to the correct component */}
            <Route path='/' element={<LandingPage />} />
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
