// 변수 선언
const todoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"; // TODOS_KEY값 선언

// 배열 생성
let toDos = []; // 배열이라서 값이 다를 수 있기 때문에 let을 쓴거임

// 배열 저장 함수
function saveToDos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // JSON.stringify을 하면 값이 배열로 추가됨
};

// 버튼 삭제 함수
function deleteToDo(event) {
  const li = event.target.parentElement; // li는 event의 타켓의 부모요소  
  li.remove(); // li 제거
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); // filter 함수는 원하는 배열의 값을 제거해서 새로운 배열로 생성
  saveToDos(); // 배열 함수 호출
};

// todo 함수
function paintToDo(newTodo){
  const li = document.createElement("li"); // li 태그 생성변수
  li.id = newTodo.id; // li의 아이디는 value 값
  const span = document.createElement("span"); // span 태그 생성변수
  span.innerText = newTodo.text; // span의 내용은 newTodo 값
  const button = document.createElement("button"); // button 생성
  button.innerText = "❌"; // span의 내용은 newTodo임.
  button.addEventListener("click",deleteToDo); // 버튼 이벤트
  li.appendChild(span); // li의 자식은 span이다
  li.appendChild(button); // li의 자식은 button이다.
  toDoList.appendChild(li); // toDoList 자식은 li임.
};

// handleToDoSumbit 함수
function handleToDoSumbit(event) {
  event.preventDefault(); // event 클릭 방지
  const newTodo = toDoInput.value; // newTodo는 input 값
  toDoInput.value = ""; // inupt의 값 선언
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  }; // newTodoObj 객체 생성
  toDos.push(newTodoObj); // 빈 배열에 newTodoObj 값 넣기
  paintToDo(newTodoObj); // paintToDo()함수에 newTodoObj라는 매개변수 실행
  saveToDos(); // 배열 저장 함수
};

// submit시 함수 실행
todoForm.addEventListener("submit",handleToDoSumbit); // todoForm을 보낼시 handleToDoSumbit 실행

// todolist 저장
const savedToDos = localStorage.getItem(TODOS_KEY); // localStorage에 안에 있는 TODOS_KEY값 읽는 변수
if(savedToDos !== null){   
  const parsedToDos = JSON.parse(savedToDos); // parsedToDos는 savedToDos 값을 객체 생성
  toDos = parsedToDos; // toDos는 객체임
  parsedToDos.forEach(paintToDo); //parsedToDos에서 paintToDo라는 콜백함수 실행
};