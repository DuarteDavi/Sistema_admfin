let mostraparcela = document.getElementById("num-parcelas");
let mostralabel = document.getElementById("num-parcelas1");
let valorparcela= document.getElementById("valor_parcela")
function mostraparcelas(){
    mostraparcela.style.display= "initial";
    mostralabel.style.display= "initial";
    valorparcela.style.display="initial"

}
function recolheparcelas(){
    mostraparcela.style.display= "none";
    mostralabel.style.display= "none";
    valorparcela.style.display= "none";
    
}

function mostra_valor_qtd_parcela(){
    let qtd_parcela = document.getElementById("num-parcelas").value;
    let valor_projeto = document.getElementById("valor-projeto").value;
    let valor_parcela = valor_projeto / qtd_parcela;
    partext ="Valor parcela: " + valor_parcela;
    document.getElementById("valor_parcela").innerText = partext;

}






