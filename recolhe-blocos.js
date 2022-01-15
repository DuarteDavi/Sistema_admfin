let empresa = document.getElementById("bloco-empresa")

function recolheempresa(){
    if (empresa.style.display =="none"){
        empresa.style.display = "initial";
        document.getElementById("ic2").style.visibility="visible";
        document.getElementById("ic3").style.visibility="hidden";

    }else{
    empresa.style.display = "none"
    document.getElementById("ic2").style.visibility="hidden";
    document.getElementById("ic3").style.visibility="visible";
}
}

let representante = document.getElementById("bloco-representante")
function recolherepresentante(){
    if(representante.style.display =="none"){
        representante.style.display ="initial";
        document.getElementById("ic5").style.visibility="visible";
        document.getElementById("ic6").style.visibility="hidden";

    }else{
    representante.style.display = "none"
    document.getElementById("ic5").style.visibility="hidden";
    document.getElementById("ic6").style.visibility="visible";
}
}
let contrato = document.getElementById("bloco-contrato")
function recolhecontrato(){
    if(contrato.style.display =="none"){
        contrato.style.display ="initial";
        document.getElementById("ic7").style.visibility="visible";
        document.getElementById("ic8").style.visibility="hidden";

    }else{
    contrato.style.display = "none"
    document.getElementById("ic7").style.visibility="hidden";
    document.getElementById("ic8").style.visibility="visible";
}
}
let prazo = document.getElementById("bloco-prazo")
function recolheprazo(){
    if(prazo.style.display =="none"){
        prazo.style.display ="initial";
        document.getElementById("ic10").style.visibility="visible";
        document.getElementById("ic11").style.visibility="hidden";

    }else{
    prazo.style.display = "none"
    document.getElementById("ic10").style.visibility="hidden";
    document.getElementById("ic11").style.visibility="visible";
}
}
let pagamento = document.getElementById("bloco-pagamento")
function recolhepagamento(){
    if(pagamento.style.display =="none"){
        pagamento.style.display ="initial";
        document.getElementById("ic13").style.visibility="visible";
        document.getElementById("ic14").style.visibility="hidden";

    }else{
    pagamento.style.display = "none"
    document.getElementById("ic13").style.visibility="hidden";
    document.getElementById("ic14").style.visibility="visible";
}
}
let testemunha = document.getElementById("bloco-testemunha")
function recolhetestemunha(){
    if(testemunha.style.display =="none"){
        testemunha.style.display ="initial";
        document.getElementById("ic16").style.visibility="visible";
        document.getElementById("ic17").style.visibility="hidden";

    }else{
    testemunha.style.display = "none"
    document.getElementById("ic16").style.visibility="hidden";
    document.getElementById("ic17").style.visibility="visible";
}
}