var signup_btn = document.getElementById("signup_btn");
var signin_btn = document.getElementById("signin_btn");
var name_field = document.getElementById("name_field");
var title = document.getElementById("title");

signin_btn.addEventListener("click", ()=>{
    name_field.style.maxHeight = "0";
    title.innerHTML = "Sign In";
    signup_btn.classList.add("disable");
    signin_btn.classList.remove("disable");
})
signup_btn.addEventListener("click", ()=>{
    name_field.style.maxHeight = "65px";
    title.innerHTML = "Sign Up";
    signin_btn.classList.add("disable");
    signup_btn.classList.remove("disable");
})