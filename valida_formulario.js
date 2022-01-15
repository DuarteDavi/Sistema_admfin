const formulario = document.getElementById("formularioprincipal");
const nomeempresa = document.getElementById("nome-empresa");
formulario.addEventListener('submit', (e) =>{
    e.preventDefault()
    checkInputs()
}) 
function checkInputs(){
    const nomeempresaValue = nomeempresa.value.trim()
    if (nomeempresaValue ===''){
        errorValidation(nomeempresa, "Preencha este campo")
    }else{
        //ddsdsd
    }
}
function errorValidation(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message
    formControl.className = "formularioerro";


}