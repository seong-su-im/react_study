import React, { useState } from 'react';

const Sound = () => {
  // 강아지 버튼과 고양이 버튼을 만들고
  // 버튼을 눌렀을 때 각각 울음 소리가 나오도록 구현하기
  // 강아지는 왈왈 , 고양이는 야옹
   const [sound, setSound] = useState("왈왈");


   const dogBtn = () => {
    setSound("왈왈")
   }

   const catBtn = () => {
    setSound("야옹")
   }
   
  return (
    <div>
      <p>{sound}</p>
      <button onClick={dogBtn}>강아지 버튼</button>
      <button onClick={catBtn}>고양이 버튼</button>
    </div>
  );
};

export default Sound;