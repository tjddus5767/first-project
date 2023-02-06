const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock(); //실행하자 마자 시간을 보기위해서 함수를 한 번 호출
setInterval(getClock,1000); // 1초에 한 번 씩 getClock함수 호출