# Nomad Coder

## 바닐라 JS로 크롬 앱 만들기


## 템플릿 리터럴(Template literals)
```
템플릿 리터럴(Template literals)
 `${변수명}`
 ``` 
```
Window.LocalStorage method
localStorage.setItem(); // 어플리케이션 탭에 localStorage를 적용
localStorage.getItem(); // 어플리케이션 탭에 localStorage를 읽음
localStorage.removeItem(); // 어플리케이션 탭에 localStorage를 제거
```

## setInterval function()
```
setInterval ( 함수이름 , 시간 );
```


## 시계 만들기

```
const date = new Date();
new Date => 현재 시간,분,초
`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
```
```
padStart.padEnd 메소드
ex) "원래 문자".padStart("추가할 문자 갯수","추가저할 문자");

String() 메소드는 문자로 변환

```
## 랜덤 메소드 사용
```
Math.random -> 0 ~ 1 까지 무작위 수 
Math.random * 10 -> 1 ~ 9까지 무작위 수

정수로 변하는 방법 2가지
1) Math.round(x);  // x값을 반올림함 소수점이 5 미만이면 버리고 5이상이면 올림
2) Math.floor(x); // 항상 내림, x보다 작거나 같은 큰 정수 반환

createElement 메소드 -> 생성할 요소(HTML Tag)
```