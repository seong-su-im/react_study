import React, { useState } from 'react';

const Colors = () => {
  // 빨간색 버튼을 누르면 글자색을 빨갛게
  // 파란색 버튼을 누르면 글재색을 파랗게
  // 핑크색을 입력하면 글자 색을 없앤다.

  const [result,setResult] = useState("");
  const[color,setColor] = useState("");

  const redBtn = () => {
    setColor("red")
  }

  const blueBtn = () => {
    setColor("blue")
  }

  const pinkBtn = (e) => {
    
    setResult(e.target.value)
    if(e.target.value == "핑크색"){
      setColor("")
    } 
  }

  return (
    <div>
       <p style={{color:color}}>{result}</p>
       <button onClick={redBtn}>빨간색</button>
       <button onClick={blueBtn}>파란색</button><br/>
       <input type='text' onChange={pinkBtn}/>
    </div>
  );
};

export default Colors;