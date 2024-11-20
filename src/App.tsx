import './App.css';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CourseDetailPage from './pages/CourseDetailPage';
import TeacherListPage from './pages/TeacherListPage';
import BookingPage from './pages/BookingPage';

function ScrollToTop() {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'  
    });
  }, [location]); 
  return null; 
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop /> 
      <div className="mt-5 px-5 pb-7"> 
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/course/:courseId' element={<CourseDetailPage />} />
          <Route path='/teachers' element={<TeacherListPage />} />
          <Route path='/booking-form' element={<BookingPage />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;