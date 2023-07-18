import React from 'react'
import Board from './Components/Board';
import './App.css';
import Home from './Components/Home';
import Hard from './Components/Hard';

import { Routes, Route } from 'react-router-dom';

function App() {

return (
  <>
  <div className="app">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Board' element={<Board />}/>
        <Route path='/Hard' element={<Hard />}/>
      </Routes>
  </div>
  </>
)

}
export default App;
