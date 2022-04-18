import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Chart from './components/Chart';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import HeaderMain from './components/UI/HeaderMain/HeaderMain';
import ContactPages from './pages/ContactPages';
import EducationTipsPages from './pages/EducationTipsPages';
import ExperienceTipsPages from './pages/ExperienceTipsPages';
import FinishPages from './pages/FinishPages';
import MainPages from './pages/MainPages';
import SkillsPages from './pages/SkillsPages';
import SkillTipsPages from './pages/SkillTipsPages';
import { IntlProvider } from 'react-intl'
function App() {
  return (
    <>
    <IntlProvider messages={{}} locale='en' defaultLocale='en'>
    <HeaderMain/>
    <Chart/>
    <Routes>
      <Route path='/main' element={<MainPages/>}/>
      <Route path='*' element={<Navigate to='/main' replace/>}/>
      <Route path='/contact' element={<ContactPages/>}/>
      <Route path='/experience-tips' element={<ExperienceTipsPages/>}/>
      <Route path='/experience' element={<Experience/>}/>
      <Route path='/education-tips' element={<EducationTipsPages/>}/>
      <Route path='/education' element={<Education/>}/>
      <Route path='/skill-tips' element={<SkillTipsPages/>}/>
      <Route path='/skills' element={<SkillsPages/>}/>
      <Route path='/finish-project' element={<FinishPages/>}/>

    </Routes></IntlProvider>
    </>
  );
}

export default App;
