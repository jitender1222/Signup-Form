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

    v ? "" : alert("email is not correct");

    // password validation

    let psd=passwordValidation(password.value);

    psd ? psd=password.value  : alert(`Password Not Good 
    Password contains 1UpperCase 1LowerCase 1SpecialCharacter and a Digit `)
    console.log("psd"+ psd);

    //submit Password

    let AgainPsd=passRepeat.value;

    AgainPsd==psd ? alert("Form is ready to submit") : alert("Submit PassWord is not Correct")
    console.log("Again"+AgainPsd);

})

function emailValidation(value){

  const validateCheck= /^[A-Za-z0-9]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z]{2,6}$/;

  return validateCheck.test(value) ? true :  false;

}


function passwordValidation(value){

    const validatePassCheck=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    return validatePassCheck.test(value) ? true :  false;
}