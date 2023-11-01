import { Fragment, useEffect, useState } from 'react'
import './App.css'
import LineOverlap from './LineOverlap';
import CompareVersionString from './CompareVersionString';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LineOverlap/>} />
          <Route path="/compareversion" element={<CompareVersionString/>} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
