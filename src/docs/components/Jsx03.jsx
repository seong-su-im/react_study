//실습
//name과 message를 넣어서 랜더링하기
//name : 이름 , message : 환영합니다.

export default function Jsx03() {
  const name = "임성수";
  const message = "환영합니다.";
  return (
      <>
        name : {name} <br/>
        <p style={{color:"red"}}>{message}</p>
      </>
  )
}