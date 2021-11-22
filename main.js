const usernameInput = document.getElementById('username')
usernameInput.addEventListener('keyup', checkName);
const usernameError = document.getElementById('username_error');

function checkName(e) {
    if(e.target.value.includes('@')) {
        usernameError.textContent = "Het gebruikersnaam mag geen '@' bevatten!"
    } else {
        usernameError.textContent = '';
    }
}

const passwordInput = document.getElementById('password');
passwordInput.addEventListener('keyup', checkPassword);
const passwordError = document.getElementById('password_error');

function checkPassword(e) {
    if(e.target.value === '' || e.target.value.length > 6) {
        passwordError.textContent = '';
    } else {
        passwordError.textContent = "Het wachtwoord moet minimaal 6 tekens bevatten!";
    }
}