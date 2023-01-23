const API_KEY = "68254f4690ac5f1408ee38fdb7bb8231";

// user의 자표 구하는 함수
function onGeoOk(position){
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  // console.log("You Live in",lat,lng);
  // weather api url
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  // fetch는 네트워크에 있는 JSON 파일을 불러와서 실행한다.
  fetch(url)
  .then(response => response.json()
  .then(data => {
    const weather = document.querySelector("#weather span:first-child"); 
    const city = document.querySelector("#weather span:last-child");
    weather.innerText = `${data.weather[0].main} /  ${data.main.temp}`; // data.weather[0].main는 날씨 명령어, data.main.temp는 온도명령어
    city.innerText = data.name; // data.name는 도시명령어
    })
    );
  };
function onGeoError(){
  alert("Can't find you. No wearther for you.")
};

// 위치 정보 접근
// getCurrentPosition(성공함수, 실해함수)
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);