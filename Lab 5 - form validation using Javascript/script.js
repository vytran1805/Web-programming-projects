/*----------------------------------------------------------------
    Name: Vy Tran
    Date:  Nov 22, 2022
    Section: CST8285_301
    File name: script.js
    This is the Lab5 -Form validation using HTML, CSS, Javascript. 
------------------------------------------------------------------*/

let emailError = document.getElementById('emailError');
let nameError = document.getElementById('nameError');
let passError = document.getElementById('passError');
let newPassError = document.getElementById('newPassError');
let termsError = document.getElementById('termsError');

let emailInput = document.getElementById('email');
let nameInput = document.getElementById('login');
let passInput = document.getElementById('pass');
let newPassInput = document.getElementById('newPass');
let newsletter = document.getElementById('newsletter');
let termsInput = document.getElementById('terms');

//define a global variables
let defaultMsg = "";
let emailErrorMsg ="x Email address should be non-empty, and with the format xyz@xyz.xyz";
let nameErrorMsg = "x User name should be non-empty, and within 20 characters long.";
let passErrorMsg = "x Password should be at least 6 characters: 1 uppercase, 1 lowercase.";
let newPassErrorMsg = "x Please retype password";
let termsErrorMsg = "x Please accept the terms and conditions.";

/*-----------------------------------------------------------------------
Add event listener to element email and create function to validate email
------------------------------------------------------------------------*/
//emailInput.addEventListener('keyup',validateEmail);
//function to validate email
function validateEmail(){
    let email = emailInput.value;
    let regexp = /\S+@\S+\.\S+/;
    if (regexp.test(email)){
        emailError.innerHTML = defaultMsg;
        return false
    }else {
    emailError.innerHTML = emailErrorMsg;
    return true;
    }
}
/*-----------------------------------------------------------------------
Add event listener to element name and create function to validate name
------------------------------------------------------------------------*/
//nameInput.addEventListener('keyup',validateName);
//method to validate username
function validateName(){
    let name = nameInput.value.toLowerCase();
    if (name !== '' && name !== null && name.length <= 20) {
        nameError.innerHTML = defaultMsg;
        return true;
    }else{
        nameError.innerHTML = nameErrorMsg;
        return false;
    }
}
/*-----------------------------------------------------------------------
Add event listener to element password and create function to validate password
------------------------------------------------------------------------*/
//passInput.addEventListener('keyup',validatePass);
//method to validate password
function validatePass(){
    let password = passInput.value;
    let regexp1=/^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z]).{6,}$/; //the xpassword pattern must contain 1 upper and 1 lower case, at least 6 characters
    if (password.match(regexp1)){ //test is predefiend method to check if the entered password matches the regexp
        passError.innerHTML = defaultMsg;
        return true;
    }else {
        passError.innerHTML = passErrorMsg;
        return false;
    } 
}
/*-----------------------------------------------------------------------
Create function to validate re-type password
------------------------------------------------------------------------*/
function validateNewPass(){
    let password2 = newPassInput.value; 
    if (password2.match(passInput.value)){ //test is predefiend method to check if the retype password matches the previous one
        newPassError.innerHTML = defaultMsg;
        return true;
    }else {
        newPassError.innerHTML = newPassErrorMsg;
        return false;
    }
}
/*-----------------------------------------------------------------------
Create function to pop up an alert when user checks newsletter box
------------------------------------------------------------------------*/
newsletter.addEventListener('change',()=>{
    alert('You might be spam by checking this field.');
})


/*-----------------------------------------------------------------------
Create function to validate Terms and Conditions
------------------------------------------------------------------------*/
function validateTerms(){
    if(termsInput.checked){
        termsError.innerHTML = defaultMsg;
        return true;
    }else {
        termsErrorMsg.innerHTML = termsErrorMsg;
        return false;
    }
}

//onsubmit method
// let submit = document.getElementById('submit');
// submit.addEventListener('click',validate);
function validate(){
    let valid = true;
    if (validateEmail()){
        emailError.innerHTML = emailErrorMsg;
        valid = false;
    }if (!validateName()){
        nameError.innerHTML=nameErrorMsg;
        valid = false;
    }if (!validatePass()){
        passError.innerHTML=passErrorMsg;
        valid = false;
    }if (!validateNewPass()){
        newPassError.innerHTML=newPassErrorMsg;
        valid = false;
    }if (!validateTerms()){
        termsError.innerHTML = termsErrorMsg;
        valid = false;    
    }else
    document.form.submit(); return valid;
}
let reset = document.getElementById('reset');
reset.addEventListener('click',resetFormError);
function resetFormError() {
    emailError.innerHTML=defaultMsg;
    nameError.innerHTML=defaultMsg;
    passError.innerHTML=defaultMsg;
    newPassError.innerHTML=defaultMsg;
    termsError.innerHTML= defaultMsg;
}


