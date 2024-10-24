import React, { useRef } from 'react';
import Form from './Form';

const CheckInput = () => {

  // 스타일 정의
  const style = {
    display : "flex",
    flexDirection : "column",
    width : "200px"
  }
  
  // inputRef를 전달
  const inputRef = useRef([]);
  // formRef를 전달
  const formRef = useRef("");
  // 버튼을 클릭하면 input의 값을 유효성 검사 할 수 있는 함수를 제작 후 전달
  const onClickTocheckInputvalues = () => {
      console.log("버튼클릭");
      for(let input of inputRef.current){
        if((!input.value)){
          alert(`${input.name} 값을 입력하세요.`);
        }
      }
      formRef.current.submit();
  }


  return (
    <Form style={style} inputRef={inputRef} formRef={formRef} onClickTocheckInputvalues={onClickTocheckInputvalues}/>
  );
};

export default CheckInput;