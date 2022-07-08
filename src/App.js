import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {Home, Blog, Creators, Login, Products, Reads, Starter, Stores, Videos} from './pages';
import {Nav, Profile, QuickStats} from './containers';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/blog' element={<Blog />}/>
        <Route path='/creators' element={<Creators />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/products' element={<Products />}/>
        <Route path='/reads' element={<Reads />}/>
        <Route path='/starter' element={<Starter />}/>
        <Route path='/stores' element={<Stores />}/>
        <Route path='/videos' element={<Videos />}/>
      </Routes>

      <Nav />
      <Profile />
      <QuickStats />
    </Router>
  );
}

export default App;
