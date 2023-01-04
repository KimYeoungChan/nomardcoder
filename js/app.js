// 변수 선언
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// 중요한 정보를 담은게 아니라서 전부 대문자
const HIDDEN_CLASSNAME = "hidden"; // hidden 속성 변수화
const USERNAME_KEY = "username"; // username parament 변수화

// 전송 버튼 함
function onLoginSubmit(event) {
  event.preventDefault(); // 무작위 실행 방지
  loginForm.classList.add(HIDDEN_CLASSNAME); // hidden 클래스 추가
  const username = loginInput.value; // input.value 변수 추가
  localStorage.setItem(USERNAME_KEY, username); // localStorage key, value 값 추가
  paintGreetings(username); //paintGreetings 함수 호출
}

// paintGreetings 함수
function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`; // greeting 택스트 작성
  greeting.classList.remove(HIDDEN_CLASSNAME); //HIDDEN_CLASSNAME 클래스 제거
}

// localStorage key,value 값 저장하는 변수
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) { // savedUsername가 null이랑 완전일차
  // form show
  loginForm.classList.remove(HIDDEN_CLASSNAME); // HIDDEN_CLASSNAME 클래스 제거
  loginForm.addEventListener("submit", onLoginSubmit);
  // loginForm submit이벤트 리스너로 함수 호출
} else {
  // h1 show
  paintGreetings(savedUsername); //paintGreetings 함수 호출
}