import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HOME from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HOME />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
