formulario = document.getElementById("formularioprincipal");
/*formulario.addEventListener('submit', (e) =>{
    e.preventDefault()
    checkInputs()
    checkLg()
    checkBairro()
}) */
function checkNameEmpresa() {
    nomeempresa = document.getElementById("nome-empresa").value;
    if (nomeempresa === "") {
        document.getElementById("nome-empresa").style.borderColor = "red";
        document.getElementById("msg-error-empresa").innerText = "Digite o nome da empresa";

    } else {
        document.getElementById("nome-empresa").style.borderColor = "black";
        document.getElementById("msg-error-empresa").innerText = "";
    }
}
function formatacnpj(){
   cnpj = document.getElementById("cnpj").value;
   cnpj.toString;
   if (cnpj.length != 14){
       document.getElementById("msg-error-cnpj").innerText ="CNPJ precisa ter 14 digitos!";
       document.getElementById("cnpj").style.borderColor ="red";
   }else{
   cnpjformatado = cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
   document.getElementById("msg-error-cnpj").innerText = cnpjformatado;
   document.getElementById("cnpj").style.borderColor ="black";
}}
function checkLg() {
    lgemp = document.getElementById("logradouro-empresa").value;
    if (lgemp === "") {
        document.getElementById("logradouro-empresa").style.borderColor = "red";
        document.getElementById("msg-error-lg").innerText = "Digite um endereço válido";
    }
    else {
        document.getElementById("logradouro-empresa").style.borderColor = "black";
        document.getElementById("msg-error-lg").innerText = "";
    }
}
function checkBairro() {
    bairro = document.getElementById("bairro-empresa").value;
    if (bairro === "") {
        document.getElementById("bairro-empresa").style.borderColor = "red";
        document.getElementById("msg-error-brro").innerText = "Digite algo";
    }
    else {
        document.getElementById("bairro-empresa").style.borderColor = "black";
        document.getElementById("msg-error-bairro").innerText = "";

    }
}
function checkCity() {
    cidade = document.getElementById("cidade-empresa").value;
    if (cidade === "") {
        document.getElementById("cidade-empresa").style.borderColor = "red";
        document.getElementById("msg-error-city").innerText = "Digite o nome da cidade";
    }
    else {
        document.getElementById("cidade-empresa").style.borderColor = "black";
        document.getElementById("msg-error-city").innerText = "";
}}
function checkCEPEmpresa(){
    cepempresa = document.getElementById("cep-empresa").value;
    cepempresa.toString;
    if (cepempresa != 8){
        document.getElementById("cep-empresa").style.borderColor ="red";
        document.getElementById("msg-error-cep-emp").innerText ="CEP precisar ter 8 digitos!"; 
    }else{
        document.getElementById("cep-empresa").style.borderColor ="black";
        document.getElementById("msg-error-cep-emp").innerText =""; 
    }
}
function checkCEPrepresentante() {
    cep = document.getElementById("cep-representante").value;
    cep.toString
    if (cep.length != 8){
        document.getElementById("cep-representante").style.borderColor ="red";
        document.getElementById("msg-error-cep-rep").innerText ="CEP precisar ter 8 digitos!";   
    }else{
        document.getElementById("cep-representante").style.borderColor ="black";
        document.getElementById("msg-error-cep-rep").innerText ="";
        }}

cepempresa = document.getElementById("cep-empresa").value;
cepformatado = cep.replace(/^(\d{5})(\d{2})/, "$1-$2");
cepformatadoemp = cepempresa.replace(/^(\d{5})(\d{2})/, "$1-$2");
document.getElementById("cep-formatado").innerText = cepformatado;
document.getElementById("cep-formatado-empresa").innerText = cepformatadoemp;
    
function checkNameRep() {
    nomerepresentante = document.getElementById("nome-representante").value;
    if (nomerepresentante === "") {
        document.getElementById("nome-representante").style.borderColor = "red";
        document.getElementById("msg-error-nmrep").innerText = "Digite um nome válido";
    }
    else {
        document.getElementById("nome-representante").style.borderColor = "black";
        document.getElementById("msg-error-nmrep").innerText = "";
    }
}
function checkProfiRep() {
    profirepresentante = document.getElementById("profissao-representante").value;
    if (profirepresentante === "") {
        document.getElementById("profissao-representante").style.borderColor = "red";
        document.getElementById("msg-error-profi").innerText = "Digite uma profissão";
    }
    else {
        document.getElementById("profissao-representante").style.borderColor = "black";
        document.getElementById("msg-error-profi").innerText = "";
    }
}
function checkCPF(){
    cpf = document.getElementById("cpf-representante").value;
    cpf.toString;
    if (cpf.length != 11){
        document.getElementById("cpf-formatado").innerText ="CPF precisar ter 11 digitos!";
        document.getElementById("cpf-representante").style.borderColor ="red";

    }else{
    cpfformatado = cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
    document.getElementById("cpf-formatado").innerText = cpfformatado;
    document.getElementById("cpf-representante").style.borderColor ="black";

}}
function checkRgRep() {
    rgrepresentante = document.getElementById("rg-representante").value;
    if (rgrepresentante.length < 5) {
        document.getElementById("rg-representante").style.borderColor = "red";
        document.getElementById("msg-error-rg").innerText = "Digite um rg válido";
    }
    else {
        document.getElementById("rg-representante").style.borderColor = "black";
        document.getElementById("msg-error-rg").innerText = "";
    }
}
function checkLgRep() {
    lgrep = document.getElementById("logradouro").value;
    if (lgrep === "") {
        document.getElementById("logradouro").style.borderColor = "red";
        document.getElementById("msg-error-lgrep").innerText = "Digite um endereço válido";
    }
    else {
        document.getElementById("logradouro").style.borderColor = "black";
        document.getElementById("msg-error-lgrep").innerText = "";
    }
}
function checkBairroRep() {
    bairrorep = document.getElementById("bairro-representante").value;
    if (bairrorep === "") {
        document.getElementById("bairro-representante").style.borderColor = "red";
        document.getElementById("msg-error-brrorep").innerText = "Digite o bairro";
    }
    else {
        document.getElementById("bairro-representante").style.borderColor = "black";
        document.getElementById("msg-error-brrorep").innerText = "";
    }
}
function checkCityRep() {
    cityrep = document.getElementById("cidade-representante").value;
    if (cityrep === "") {
        document.getElementById("cidade-representante").style.borderColor = "red";
        document.getElementById("msg-error-cityrep").innerText = "Digite o nome da cidade";
    }
    else {
        document.getElementById("cidade-representante").style.borderColor = "black";
        document.getElementById("msg-error-cityrep").innerText = "";
    }
}
function checkDomain() {
    domain = document.getElementById("linksite").value;
    if (domain === "") {
        document.getElementById("linksite").style.borderColor = "red";
        document.getElementById("msg-error-domain").innerText = "Digite um link válido";
    }
    else {
        document.getElementById("linksite").style.borderColor = "black";
        document.getElementById("msg-error-domain").innerText = "";
    }
}
function checkObjeto() {
    objeto = document.getElementById("objeto").value;
    if (objeto === "") {
        document.getElementById("objeto").style.borderColor = "red";
        document.getElementById("msg-error-objeto").innerText = "Digite o que será feito no contrato";
    }
    else {
        document.getElementById("objeto").style.borderColor = "black";
        document.getElementById("msg-error-objeto").innerText = "";
    }
}

function checkNameByte() {
    testemunhabyte = document.getElementById("nome-t-byte").value;
    if (testemunhabyte == "") {
        document.getElementById("nome-t-byte").style.borderColor = "red";
        document.getElementById("msg-error-tbyte").innerText = "Digite o nome da testemunha";
    }
    else {
        document.getElementById("nome-t-byte").style.borderColor = "black";
        document.getElementById("msg-error-tbyte").innerText = "";
    }}


function checkCPFByte(){
    cpfTestByte = document.getElementById("cpf-t-b").value;
    cpfTestByte.toString;
    if (cpfTestByte.length != 11) {
        document.getElementById("cpf-t-b").style.borderColor = "red";
        document.getElementById("msg-error-cpfb").innerText = "CPF deve ter 11 digítos";
    }
    else {
        document.getElementById("cpf-t-b").style.borderColor = "black";
        document.getElementById("msg-error-cpfb").innerText = "";
    }
}
function checkNameContrat(){
    testemunhacontrat = document.getElementById("nome-t-contratada").value;
    if (testemunhacontrat == "") {
        document.getElementById("nome-t-contratada").style.borderColor = "red";
        document.getElementById("msg-error-tcontrat").innerText = "Digite o nome da testemunha";
    }
    else {
        document.getElementById("nome-t-contratada").style.borderColor = "black";
        document.getElementById("msg-error-t-contrat").innerText = "";
    }
}

function checkCPFContrat(){
    cpfTestContrat = document.getElementById("cpf-t-c").value;
    cpfTestContrat.toString;

    if (cpfTestContrat.length != 11) {
        document.getElementById("cpf-t-c").style.borderColor = "red";
        document.getElementById("msg-error-cpfc").innerText = "CPF deve ter 11 digítos";
    }
    else {
        document.getElementById("cpf-t-c").style.borderColor = "black";
        document.getElementById("msg-error-cpfc").innerText = "";
    }
}


/*function errorValidation(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message
    formControl.className = "formularioerro";


}*/