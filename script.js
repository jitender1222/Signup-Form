const input=document.querySelector('.input');
const btn=document.getElementById('submit');
const names=document.getElementById('name');
const email=document.getElementById('email');
const password=document.getElementById('password');
const passRepeat=document.getElementById('pass-repeat');

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    if(names.value.length==' ') alert("Enter you name");
    else if(email.value.length==' ')alert('Enter your name');
    else if(password.value.length==' ')alert("enter your password");
    else if(passRepeat.value.length==' ')alert("Repeat password");

    //email validation

    let v=emailValidation(email.value);

    if(v.test==false){
        console.log("false email is not correct");
    }
    else{
        console.log("true email is correct");
    }

    //password validation
})

function emailValidation(value){
    console.log("value is"+ value);
    let regEx=/^[A-Za-z]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z]{2,6}$/;

    console.log(regEx);
    if(value==regEx){ 
        console.log("true");
        return true;
    }
    else{ 
        console.log("false");
        return false;
    }
}