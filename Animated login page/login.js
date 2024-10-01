const mainshield = document.querySelector('.mainshield');
const registerlink = document.querySelector('.register-link');
const loginlink = document.querySelector('.login-link');
//for register
registerlink.onclick = () => {
     mainshield.classList.add('active');
}

//for login
loginlink.onclick = () => {
     mainshield.classList.remove('active');
}