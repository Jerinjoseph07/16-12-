
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Studentdetails from './component/Student/Studentdetails';
import Studentedit from './component/Student/Studentedit';
import Students from './component/Student/Students';

function App() {
  return (
    <div>
           <BrowserRouter>
           <Routes>
            <Route path="/Students" element={<Students method="post"/>}></Route>
            <Route path="/Studentdetails" element={<Studentdetails method="post"/>}></Route>


           </Routes>
           </BrowserRouter>
           
    </div>
  );
}

export default App;
