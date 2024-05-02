function validate(){
    const uname=document.getElementById('username').value;
    const password=document.getElementById('pass').value;

    if(uname.trim()===""){
        alert('Fill username');
    }
    else if(password.trim()===""){
        alert('Fill password');
    }
    else{
    alert('Login success!');
    window.location.href='Route.html';
    }
}