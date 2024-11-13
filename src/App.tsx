import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SideMenu from './components/SideMenu';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CourseDetailPage from './pages/CourseDetailPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="flex">
        <SideMenu />
        <div className="content flex-1 pt-5"> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/course/:courseId" element={<CourseDetailPage />} />
          </Routes>
        </div>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;