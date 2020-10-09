// add js here
function logSubmit(event) {
  
    let isError = false;
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("cpassword");
    const error = document.querySelector('.error');
    const errorText = document.querySelector('.error p');

    //initialize
    error.classList.remove("error-display");   
    password.classList.remove("input-error");
    confirmPassword.classList.remove("input-error");    
    
    if (!document.getElementById("termsServices").checked){      
        window.alert("You need to agree for the terms of service");
        isError = true;        
    }    
    else if (password.value.length < 10) {        
        error.classList.add("error-display");        
        errorText.innerText = "Your password is too short! Please provide a password that is at least 10 characters long.";
        password.classList.add("input-error");
        password.focus();
        isError = true;
    }
    else if (password.value !== confirmPassword.value) {        
        error.classList.add("error-display");        
        errorText.innerText = "Your passwords didn't match! Please provide the same password in each field.";
        confirmPassword.classList.add("input-error");
        confirmPassword.focus();
        isError = true;
    }    
    
    if(!isError) {
        window.alert("Success!");
        return;
    }   
    
    event.preventDefault();
  }

const form = document.querySelector('form');

form.addEventListener('submit', logSubmit);