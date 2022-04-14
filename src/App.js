import { Route, Routes } from 'react-router-dom';
import './App.css';
import ContactPages from './pages/ContactPages';
import MainPages from './pages/MainPages';
function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPages/>}/>
      <Route path='/contact' element={<ContactPages/>}/>
    </Routes>
  );
}

export default App;
