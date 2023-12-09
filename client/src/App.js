import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import LandingPage from './components/pages/landingPage';
import CustomerHomePage from './components/pages/customerHomePage';
import BookAppointmentPage from './components/pages/customerBookAppointmentPage';
import AppointmentPage from './components/pages/appointmentPage';
import ExerciseDetail from './components/pages/ExerciseDetail';
import Exercise from './components/pages/Exercise';
import CustomerProfile from './components/pages/customerProfile';
import CustomerEditProfile from './components/pages/customerEditProfile';

function App() {
  const location = useLocation();

  useEffect(() => {
    // Check the current route and apply styles accordingly
    if ((location.pathname === '/home') || (location.pathname === '/appointment')) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    // Clean up the effect when the component is unmounted or the route changes
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [location.pathname]);

  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/home' element={<CustomerHomePage />} />
          <Route path='/home/book-appointment' element={<BookAppointmentPage />} />
          <Route path='/exercises' element={<Exercise />} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
          <Route path='/appointment' element={<AppointmentPage />} />
          <Route path='/profile' element={<CustomerProfile />} />
          <Route path='/profile/edit' element={<CustomerEditProfile />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
