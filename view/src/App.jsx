import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from "./pages/"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<>Hello</>} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
