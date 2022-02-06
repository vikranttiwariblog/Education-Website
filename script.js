let username = document.getElementById("username");
let number = document.getElementById("number");
let email = document.getElementById("email");
let password = document.getElementById("password");

username.addEventListener("input",function(){
    let len = username.value.length;
    if(len < 8){
        document.getElementById("usr").innerHTML = "username required minimum 8 character";
    }else{
        document.getElementById("usr").innerHTML = "";
    }
})
number.addEventListener("input",function(){
    let len = String(number.value.length);
    if(len < 10){
        document.getElementById("num").innerHTML = "phone no. required minimum 10 integer";
    }else{
        document.getElementById("num").innerHTML = "";
    }
})

username.addEventListener("focus",() => username.style.padding = "5px");
username.addEventListener("blur",() => username.style.padding = "0px");

number.addEventListener("focus",() => number.style.padding = "5px");
number.addEventListener("blur",() => number.style.padding = "0px");

email.addEventListener("focus",() => email.style.padding = "5px");
email.addEventListener("blur",() => email.style.padding = "0px");

password.addEventListener("focus",() => password.style.padding = "5px");
password.addEventListener("blur",() => password.style.padding = "0px");

const navbarList = document.querySelector('.navbar-list');
const menu = document.querySelector('.hamburger-menu');

menu.addEventListener('click',() => {
    navbarList.classList.toggle('v-class');
});