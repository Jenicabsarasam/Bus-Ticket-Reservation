function validateReg(){
    const uname=document.getElementById('username').value;
    const password1=document.getElementById('pass1').value;
    const email=document.getElementById('email').value;
    const password2=document.getElementById('pass2').value;
    const checkbox1=document.getElementById('agree');
    if(uname.trim()===""){
        alert('Fill username');
    }
    else if(email.trim()===""){
        alert('Fill email');
    }
    else if(password1.trim()===""){
        alert('Fill password');
    }
    else if(password2.trim()===""){
        alert('Retype password');
    }
    else if(password1!==password2){
        alert('Confirm password not matching');
    }
    else if(!checkbox1.checked){
        alert('Click on Agree the terms and conditions');
    }
    else{
        alert("Registered successfully! You can now Login to your account");
        window.location.href="signIn.html";
    }
}

const userInput=document.getElementById('pass1');
userInput.addEventListener('blur',passwordValidate);
function passwordValidate(event){
    const enteredPassword=event.target.value;
    const lowercaseLetters=/[a-z]/g;
    const uppercaseLetters=/[A-Z]/g;
    const numbers=/[0-9]/g;
    const special=/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
    if(!enteredPassword.match(lowercaseLetters)){
        alert('Password should contain a lowercase letter');
        //userInput.focus();
    }
    
    else if(!enteredPassword.match(uppercaseLetters)){
        alert('Password should contain a Uppercase letter')
        //userInput.focus();
    }
    
    else if(!enteredPassword.match(numbers)){
        alert('Password should contain a number');
        //userInput.focus();
    }
    
    else if(!enteredPassword.match(special)){
        alert('Password should have a special character');
        //userInput.focus();
    }
    else if(enteredPassword.length<8){
        alert('Password should be atleast 8 characters long.');
        //userInput.focus();
    }
}