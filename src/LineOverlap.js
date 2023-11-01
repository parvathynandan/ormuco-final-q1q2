import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function LineOverlap() {
  const [x1, setX1] = useState('');
  const [x2, setX2] = useState('');
  const [x3, setX3] = useState('');
  const [x4, setX4] = useState('');
  const [disableBtn, setDisableBtn] = useState(true)
  useEffect(() => {
    if (x1 && x2 && x3 && x4) {
      setDisableBtn(false)
    }else {
      setDisableBtn(true)
    }
  }, [x1,x2,x3,x4])
  const [overlapResult, setOverlapResult] = useState('');

   const checkOverLap = () => {
    const c1 = Math.min(x1, x2)
    const c2 = Math.max(x1, x2)
    const c3 = Math.min(x3, x4)
    const c4 = Math.max(x3, x4)
    if (c2 < c3 || c4 < c1) {
      setOverlapResult('Lines do not overlap...');
    }else {
      setOverlapResult('Lines do overlap...');
    }
  }

  return (
    <div class='container'>
      <div>
      <Link to="/compareversion">Compare Versions</Link>
      <div class='content'>
      <h1>INSERT CORDINATES TO CHECK IF LINES OVERLAP</h1>
      </div>
      <div class='content'>
        <label>x1:</label>
        <input type="number" value={x1} onChange={(e) => setX1(e.target.value)} />
      </div>
      <div class='content'>
        <label>x2:</label>
        <input type="number" value={x2} onChange={(e) => setX2(e.target.value)} />
      </div >
      <div class='content'>
        <label>x3:</label>
        <input type="number" value={x3} onChange={(e) => setX3(e.target.value)} />
      </div>
      <div class='content'>
        <label>x4:</label>
        <input type="number" value={x4} onChange={(e) => setX4(e.target.value)} />
      </div>
      <div class='content'>
      <button style={{
          backgroundColor: disableBtn ? 'gray' : 'black'}} disabled={disableBtn} class='overlap-btn' onClick={checkOverLap}>Check Overlap</button>
      </div>
      <div class='content'>
        <h1>{overlapResult}</h1>
      </div>
      </div>
    </div>
  );
}

export default LineOverlap;
