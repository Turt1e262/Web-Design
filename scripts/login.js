"use strict";


const loginForm = document.getElementById('forms');
loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const usernameInput = document.getElementById('log-login').value;
    const passwordInput = document.getElementById('log-password').value;


    if (usernameInput === 'admin' && passwordInput === 'admin') {
        alert('Login successful!'); 
        window.location.href = 'shop-now.html';
    } else {
        alert('Invalid username or password. Please try again.'); 
    }
});

// Register validation
const registerForm = document.getElementById('form');
const inputLogin = document.getElementById('reg-login');
const inputPsw = document.getElementById('reg-password');
const inputEmail = document.getElementById('reg-email');
let invalid = document.querySelector('.invalid');

function isValidLogin() {
    validationStyles();
    // Check for login length
    if (inputLogin.value == '') {
        invalid.textContent = 'Login cannot be empty! Try again';
    } else if (inputLogin.value.length < 6) {
        invalid.textContent = `Login should be at least 6 characters. Now it's: ${inputLogin.value.length}`;
    } else {
        invalid.textContent = '';
        invalid.style.padding = '0';
    }
}

function isValidPassword() {
    validationStyles()
    if (inputPsw.value == '') {
        invalid.textContent = 'Password cannot be empty! Try again';
    } else if (inputPsw.value.length < 6) {
        invalid.textContent = `Password should be at least 6 characters. Now it's: ${inputPsw.value.length}`;
    } else {
        invalid.textContent = '';
        invalid.style.padding = '0';
    }
}

function validationStyles() {
    if (isValidLogin() || isValidPassword()) {
        invalid.style.fontSize = '12px';
        invalid.style.maxWidth = '200px';
        invalid.style.padding = '12px 24px';
    }
}

registerForm.addEventListener('submit', function (event) {
    event.preventDefault();


    if (registrationSuccessful(inputLogin.value, inputPsw.value, inputEmail.value)) {
        alert('Registration successful!'); 
        window.location.href = 'shop-now.html'; 
    } else {
        alert('Registration failed. Please try again.'); 
    }
});

function registrationSuccessful(username, password, email) {
    return username !== '' && password !== '' && email !== '';
}

// Event listeners for login validation...

inputLogin.addEventListener('blur', isValidLogin);
inputPsw.addEventListener('blur', isValidPassword);
