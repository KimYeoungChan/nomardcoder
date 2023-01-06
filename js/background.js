const images = ["0.jpg","1.jpg","2.jpg"]; // image array 생성
// 랜덤 이미지 변수
const chosenImage = images[Math.floor(Math.random() * images.length)];
// img tag 생성 변수
const bgIamge = document.createElement("img");

// 랜덤 이미지 변경
bgIamge.src = `img/${chosenImage}`;
// body에 bgIamge를 추가
document.body.appendChild(bgIamge);