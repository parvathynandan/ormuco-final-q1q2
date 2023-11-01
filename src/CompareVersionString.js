import { Fragment, useEffect, useState } from 'react'
import './App.css'
import LineOverlap from './LineOverlap';
import { Link } from 'react-router-dom';

function CompareVersionString() {
    const [version1, setVersion1] = useState('');
    const [version2, setVersion2] = useState('');
    const [disableBtn, setDisableBtn] = useState(true)
    const [result, setResult] = useState('');

      useEffect(() => {
        if (version1 && version2) {
          setDisableBtn(false)
        }else {
          setDisableBtn(true)
        }
      }, [version1, version2])

    const checkVersion = () => {
        const res = compareVersionStrings(version1, version2);
        if (res === -1) {
            setResult('Version2 is greater than version1')
        }else if(res === 1) {
            setResult('Version1 is greater than version2')
        }else if(res === 2) {
            setResult('Both are equal')
        }else {
            setResult('Invalid Version Strings')
        }
    }
    

  return (
    <Fragment>
        <div class="container">
            <Link to="/">Line Overlap</Link>
            <div>
            <div class='content'>
            <h1>INSERT VERSIONS TO COMPARE THEM</h1>
            </div>
            <div class='content'>
                <label> V1</label>
                <input type='text' value={version1} onChange={(e) => setVersion1(e.target.value)} />
            </div>
            <div class='content'>
                <label> V2</label>
                <input type='text' value={version2} onChange={(e) => setVersion2(e.target.value)} />
            </div>
            <div class='content'>
            <button style={{
          backgroundColor: disableBtn ? 'gray' : 'black'}} disabled={disableBtn} class='overlap-btn' onClick={checkVersion}>Compare Version String</button>
            </div>
            <div class='content'>
            <h1>{result}</h1>
            </div>
            </div>
        </div>
    </Fragment>
  );
}

export default CompareVersionString;

const compareVersionStrings = (version1, version2) => {
  if(!version1 || !version2) {
      return false
  }
  if(!isVersionString(version1) || !isVersionString(version2)) {
      return false
  }
  const v1Array = version1.split('.');
  const v2Array = version2.split('.');
  
  const maxLength = Math.max(v1Array.length, v2Array.length);
  
  for (let i = 0; i < maxLength; i++) {
    const v1 = parseInt(v1Array[i] || 0);
    const v2 = parseInt(v2Array[i] || 0);
    
    if (v1 < v2) {
      return -1; // version1 is less than version2
    } else if (v1 > v2) {
      return 1; // version1 is greater than version2
    }
  }
  
  return 2; //Both equal
}

const isVersionString = (item) => {
  const pattern = /^[0-9.]+$/;
  return pattern.test(item);
}

export {compareVersionStrings}
