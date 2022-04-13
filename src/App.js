import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPageForm from './components/MainPage/MainPageForm/MainPageForm';
function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPageForm/>}/>
    </Routes>
  );
}

export default App;
