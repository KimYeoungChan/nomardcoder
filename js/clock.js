// 변수 선언
const clock = document.querySelector("h2#clock");

// 시계 함수
function getClock() {
  const date = new Date(); // date 변수는 new Date로 지정
  const hours = String(date.getHours()).padStart(2,"0"); // hours 변수는 시간데이터 함수이고 값을 문자화 하고 2자리가 아면 0을 추가
  const minutes = String(date.getMinutes()).padStart(2,"0"); // minutes 변수는 분데이터 함수이고 값을 문자화 하고 2자리가 아면 0을 추가
  const seconds = String(date.getSeconds()).padStart(2,"0"); // seconds 변수는 초데이터 함수이고 값을 문자화 하고 2자리가 아면 0을 추가
  clock.innerText = `${hours}:${minutes}:${seconds}`; // clock변수의 텍스트 추가가 템플릿 리터럴로 적용하기
}

getClock(); // 함수 실행
setInterval(getClock, 1000); // 1초마다 함수 실행