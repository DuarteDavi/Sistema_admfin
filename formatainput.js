function formatacnpj(){
    cnpj = document.getElementById("cnpj").value;
    cnpjformatado = cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
    document.getElementById("cnpj-formatado").innerText = cnpjformatado;
}
function formatacpf(){
    cpf = document.getElementById("cpf-representante").value;
    cpfformatado = cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
    document.getElementById("cpf-formatado").innerText = cpfformatado;

}
function formatacep(){
    cep = document.getElementById("cep-representante").value;
    cepempresa = document.getElementById("cep-empresa").value;
    cepformatado = cep.replace(/^(\d{5})(\d{2})/, "$1-$2");
    cepformatadoemp = cepempresa.replace(/^(\d{5})(\d{2})/, "$1-$2");
    document.getElementById("cep-formatado").innerText = cepformatado;
    document.getElementById("cep-formatado-empresa").innerText = cepformatadoemp;
}
