import { Route, Routes } from 'react-router-dom';
import './App.css';
import ExperienceTips from './components/ExperienceTips/ExperienceTips';
import ContactPages from './pages/ContactPages';
import MainPages from './pages/MainPages';
function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPages/>}/>
      <Route path='/contact' element={<ContactPages/>}/>
      <Route path='/experiencetips' element={<ExperienceTips/>}/>
    </Routes>
  );
}

export default App;
