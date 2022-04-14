import { Route, Routes } from 'react-router-dom';
import './App.css';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import ContactPages from './pages/ContactPages';
import EducationTipsPages from './pages/EducationTipsPages';
import ExperienceTipsPages from './pages/ExperienceTipsPages';
import MainPages from './pages/MainPages';
import SkillTipsPages from './pages/SkillTipsPages';
function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPages/>}/>
      <Route path='/contact' element={<ContactPages/>}/>
      <Route path='/experience-tips' element={<ExperienceTipsPages/>}/>
      <Route path='/experience' element={<Experience/>}/>
      <Route path='/education-tips' element={<EducationTipsPages/>}/>
      <Route path='/education' element={<Education/>}/>
      <Route path='/skill-tips' element={<SkillTipsPages/>}/>
    </Routes>
  );
}

export default App;
