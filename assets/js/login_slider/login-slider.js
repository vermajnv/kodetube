function LoginSlider() {
    document.querySelector(".userLoginIcon").addEventListener('click', envoleSlider);
}

function envoleSlider() {
    document.querySelector(".LoginWrapper").classList.toggle("LoginWrapperVisible");
}

LoginSlider();