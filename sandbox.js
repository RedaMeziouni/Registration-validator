const  form = document.getElementById('form');
const  username = document.getElementById('username');
const  email = document.getElementById('email');
const  password = document.getElementById('password');
const  password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') {
        setErrorFor(username, "Username can't be Blank");
    } else {
        setSuccessFor(username);
    }

    if(emailValue === '' ) {
        setErrorFor(email, "Email can't be Blank");
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, "Invalid Email");
    } else {
        setSuccessFor(email);
    }

    if(passwordValue === '') {
        setErrorFor(password, "Password can't be blank");
    } else {
        setSuccessFor(password);
    }

    if(password2Value === '') {
        setErrorFor(password2, "Please confirm your password");
    } else if (password2Value !== passwordValue) {
        setErrorFor(password2, "Password doesn't Match");
    } 
    else {
        setSuccessFor(password2);
    }
}
function setSuccessFor (input) {
    const formControl = input.parentElement;

    formControl.className = 'form-control success';
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error';
}

function isEmail(email) {
    return /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
}