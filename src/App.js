import { Route, Routes } from 'react-router-dom';
import './App.css';
import Experience from './components/Experience/Experience';
import ContactPages from './pages/ContactPages';
import ExperienceTipsPages from './pages/ExperienceTipsPages';
import MainPages from './pages/MainPages';
function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPages/>}/>
      <Route path='/contact' element={<ContactPages/>}/>
      <Route path='/experiencetips' element={<ExperienceTipsPages/>}/>
      <Route path='/experience' element={<Experience/>}/>
    </Routes>
  );
}

export default App;
