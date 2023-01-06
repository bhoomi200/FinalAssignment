import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Employee from './Components/Employee';
import AddEmployee from './Components/AddEmployee';
import UpdateEmployee from './Components/UpdateEmployee';

export default function App() {
  return (
    <BrowserRouter>
    <div className="container">
      <h3 classname="m-3 d-flex justify-content-center">
        React JS App</h3>
      
      <Routes>
        <Route path='/' element={<Employee/>} />
        <Route path='/addemployee' element={<AddEmployee/>} />
        <Route path='/updateemployee/:id' element={<UpdateEmployee/>} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}
