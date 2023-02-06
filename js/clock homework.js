const clock = document.querySelector("h4#clock");

function getD_day(){
    const date = new Date();
    const christmasDate = new Date("2023-12-25T00:00:00");
    const distance = christmasDate.getTime() - date.getTime();
    const day = String(Math.floor(distance/(1000*60*60*24))).padStart(2,"0");
    const hours = String(Math.floor((distance % (1000*60*60*24))/(1000*60*60))).padStart(2,"0");
    const minutes = String(Math.floor((distance % (1000*60*60))/(1000*60))).padStart(2,"0");
    const seconds = String(Math.floor((distance % (1000*60))/1000)).padStart(2,"0");

    clock.innerText =`${day}d ${hours}h ${minutes}m ${seconds}s `;
}



getD_day(); //실행하자 마자 시간을 보기위해서 함수를 한 번 호출
setInterval(getD_day,1000); // 1초에 한 번 씩 getClock함수 호출