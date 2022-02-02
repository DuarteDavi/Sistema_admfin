const formulario = document.getElementById("formularioprincipal");
const nomeempresa = document.getElementById("nome-empresa");
formulario.addEventListener('submit', (e) =>{
    e.preventDefault()
    checkInputs()
}) 
function checkInputs(){
    if (nomeempresa.value ===''){
        document.getElementById("nome-empresa").style.borderColor = "red"
        document.getElementById("msg-error").innerText ="Digite algo";
        document.getElementById('').display
    }else{
        document.getElementById("nome-empresa").style.borderColor = "black";
        document.getElementById("msg-error").innerText ="";
    }
}
function errorValidation(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message
    formControl.className = "formularioerro";


}