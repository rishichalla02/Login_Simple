let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");

eyeicon.onclick = function(){
if(password.type == "password"){
    password.type = "text";
    eyeicon.src = "/img/eye_show.png";
}else{
    password.type = "password";
    eyeicon.src = "/img/eye_hide.png";
}
}
var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");

function register(){
x.style.left = "-400px";
y.style.left = "50px";
z.style.left = "110px";
}
function login(){
x.style.left = "50px";
y.style.left = "450px";
z.style.left = "0";
}