import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CourseDetailPage from './pages/CourseDetailPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <div className='mt-5 px-5 pb-7'> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/course/:courseId" element={<CourseDetailPage />} />
          </Routes>
        </div>
     
      <Footer/>
    </BrowserRouter>
  );
}

export default App;