import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EventDetail from './pages/EventDetail';

function App() {
  return (
    <div>
         <BrowserRouter>
           <Routes>
               <Route path='/' element={<HomePage />} />
               <Route path='/news/:id' element={<EventDetail />} />
             
           </Routes>
         </BrowserRouter>
    </div>
  );
}

export default App;
