import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './components/pages/landingPage';
import CustomerHomePage from './components/pages/customerHomePage';
import BookAppointmentPage from './components/pages/customerBookAppointmentPage';
import AppointmentPage from './components/pages/appointmentPage';
import ExerciseDetail from './components/pages/ExerciseDetail';
import Exercise from './components/pages/Exercise';
import CustomerProfile from './components/pages/customerProfile ';
 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/home' element={<CustomerHomePage />} />
            <Route path='/home/book-appointment' element={<BookAppointmentPage />} />
            <Route path='/exercises' element={<Exercise />} />
            <Route path="/exercise/:id" element={<ExerciseDetail />} />
            <Route path='/appointment' element={<AppointmentPage />} />
            <Route path='/profile' element={<CustomerProfile />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}
 
export default App;
