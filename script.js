let password = document.querySelector('#userPassword');
let passwordConfirm = document.querySelector('#confirmPassword');
let passwordErrorText = document.querySelector('#passwordErrorText');

// returns true or false
function checkPasswordsMatch() {
    if (password.value !== passwordConfirm.value) {
        password.classList.add('error');
        passwordConfirm.classList.add('error');
        passwordErrorText.textContent = "* Passwords must match";
        return false;
    } else {
        password.classList.remove('error');
        passwordConfirm.classList.remove('error');
        passwordErrorText.textContent = "";
        return true;
    }
}

function evalPassword() {
    passwordErrorText.textContent = "";
    if (this.value.length < 5) {
        this.classList.add('error');
        passwordErrorText.textContent = "Password must be 5 characters long";
    } else {
        this.classList.remove('error');
    }
}

password.addEventListener('change', evalPassword);
confirmPassword.addEventListener('change', evalPassword);

function trySubmit() {
    // if (checkPasswordsMatch())
    //     document.querySelector('form').submit();
    checkPasswordsMatch();
}

document.querySelector('#createAccountBtn').addEventListener('click', trySubmit);