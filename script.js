let eye_1 = document.getElementById("eye_1");
let eye_2 = document.getElementById("eye_2");
let password_1 = document.getElementById("password_1");
let password_2 = document.getElementById("password_2");

eye_1.addEventListener("click", function(){
    if(password_1.type == "password"){
        password_1.type = "teks";
        eye_1.classList.add("fa-eye");
    }else{
        password_1.type = "password";
        eye_1.classList.remove("fa-eye");
    }
})

eye_2.addEventListener("click", function(){
    if(password_2.type == "password"){
        password_2.type = "teks";
        eye_2.classList.add("fa-eye");
    }else{
        password_2.type = "password";
        eye_2.classList.remove("fa-eye");
    }
})

