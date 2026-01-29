import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import CourseList from './pages/CourseList';
import Course from './pages/Course';
import Lesson from './pages/Lesson';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cours" element={<CourseList />} />
          <Route path="cours/:courseId" element={<Course />} />
          <Route path="cours/:courseId/lecon/:lessonId" element={<Lesson />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
