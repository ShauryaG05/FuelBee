import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Record from "./pages/record"
import Signup from "./pages/signup"


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Record/>} />
          <Route path="/docs" element={<Record/>} />
          <Route path="/auth/signup" element={<Signup/>} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App;
