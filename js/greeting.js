//const loginForm = document.getElementById("login-form");
//const loginInput = loginForm.querySelector("input");
//const loginButton = loginForm.querySelector("button"); 
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
//const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME ="hidden";
const USERNAME_KEY ="username";


function onLoginSubmit(event){
    event.preventDefault(); //이벤트의 기본 행동 발생x
    loginForm.classList.add(HIDDEN_CLASSNAME);//form,greeting에 hidden클래스 추가 (css에 있음) 
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username); //유저 정보가 input에서 옴
    paintGreetings(username) 
}
 
function paintGreetings(username){ //화면에 텍스트가 출력하게 하는 것
    greeting.innerText = `Hello ${username}`;//hidden을 삭제하기 위해 greeting 생성
    greeting.classList.remove(HIDDEN_CLASSNAME); //greeting에 있는 hidden삭제 form에만 남음
}


const savedUsername =localStorage.getItem(USERNAME_KEY);
if(savedUsername === null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}else{
    //show the greetings
   paintGreetings(savedUsername); //유저정보가 local storage로부터 옴
    
}
//loginButton.addEventListener("click",onLoginBtnClick);