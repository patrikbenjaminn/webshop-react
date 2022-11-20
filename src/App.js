import './App.css';
import Etusivu from './pages/Etusivu';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>

       <Routes>
          <Route path='/' element={ <Etusivu />} />
       </Routes>


    </>
  );
}

export default App;
