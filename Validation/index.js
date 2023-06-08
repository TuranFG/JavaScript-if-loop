const userEmail = document.getElementById('email');
const userPassword = document.getElementById('password');
const submitButton = document.getElementById('button');

function login(){
    let email = 'admin@gmail.com';
    let pass = '12345';

    if(email===userEmail.value && pass===userPassword.value) {

        alert("You've successfully logged in")
        
    }else{ alert("Username or password is incorrect")}

    userEmail.value = "";
    userPassword.value = "";
       
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    login();
})
    


