import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { Box } from '@mui/material';
import LandingPage from './components/pages/landingPage';
import Footer from './components/footer';
import CustomerHomePage from './components/pages/customerHomePage';
import BookAppointmentPage from './components/pages/customerBookAppointmentPage';
import AppointmentPage from './components/pages/appointmentPage';
import ExerciseDetail from './components/pages/ExerciseDetail';
import Exercise from './components/pages/Exercise';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            {/* Don't forget to change the element to the correct component */}
            <Route path='/' element={<LandingPage />} />
            <Route path='/home' element={<CustomerHomePage />} />
            <Route path='/home/book-appointment' element={<BookAppointmentPage />} />
            <Route path='/fitness-tracker' element={<CustomerHomePage />} />
            <Route path='/exercises' element={<Exercise />} />
            <Route path="/exercise/:id" element={<ExerciseDetail />} />
            <Route path='/appointment' element={<AppointmentPage />} />
            <Route path='/profile' element={<CustomerHomePage />} />
          </Routes>
        </Router>
        <Footer />
      </header>
    </div>
  );
}

export default App;
