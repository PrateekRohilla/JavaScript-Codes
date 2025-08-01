/*
Valid password
- min 8 chars
- 1 capital letter, 1 small letter, 1 digit
- 1 special character
*/

function validatePassword(password){

    if(password.length < 8)
        return false;

    let hasCapsLetter = /[A-Z]/.test(password);
    let hasSmallLetter = /[a-z]/.test(password);
    let hasDigit = /\d/.test(password);
    let hasSpecialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);

    if(hasCapsLetter && hasSmallLetter && hasDigit && hasSpecialChars)
        return true;
    else
        return false;
}

let password = "83A49shd@#";

if(validatePassword(password))
    console.log('valid');
else
    console.log('invalid');

