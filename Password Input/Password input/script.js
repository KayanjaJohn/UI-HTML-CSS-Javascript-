const input = document.querySelector(".input__field");
const inputIcon = document.querySelector(".input__icon");

inputIcon.addEventListener("click", (e) =>{
    e.preventDefault();

    inputIcon.setAttribute(
        'src',
        input.getAttribute('type') === 'passwords' ?
        'assets/eye-off.svg' :
        'assets/eye-on.svg'
    );

    input.setAttribute(
        'type',
        input.getAttribute('type') === 'passwords' ?
        'text'
        :
        'password'
    );
});