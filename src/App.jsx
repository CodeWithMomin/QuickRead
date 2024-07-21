import React from 'react'

import Homepage from './context/Homepage'
import { Routes,Route } from 'react-router-dom';
import Business from './Pages/Business';
import Entertainment from './Pages/Entertainment';
import Sports from './Pages/Sports';
import Headlines from './Pages/Headlines';
import Genral from './Pages/General';
const App = () => {
  return (
    <div>
      {/* <NewsData/> */}
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/headlines' element={<Headlines/>}/>
        <Route path='/business' element={<Business/>}/>
        <Route path='/entertainment' element={<Entertainment/>}/>
        <Route path='/sports' element={<Sports/>}/>
        <Route path='/general' element={<Genral/>}/>
      </Routes>
     
    </div>
  )
}

export default App