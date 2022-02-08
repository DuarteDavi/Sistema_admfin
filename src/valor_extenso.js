

var unidades = ["um","dois","três","quatro","cinco","seis","sete","oito","nove"];
var dezena = ["dez","vinte","trinta","quarenta","cinquenta","sessenta","setenta","oitenta","noventa"];
var centena =["cem","duzentos","trezentos","quatrocentos","quinhentos","seiscentos","setecentos","oitocentos","novecentos"];
var dezena10=["onze","doze","treze","quatorze","quinze","dezesseis","dezessete","dezoito","dezenove"];
const milhar = "mil";
const dias = "dias";
function nomeextenso(){
    nome = String(document.getElementById("valor-projeto").value);

    nameArray = nome.split("");
    valorprojeto=[]
    nameArray.forEach((e) =>valorprojeto.push(parseInt(e)));
    valorprojeto =valorprojeto.reverse();

    m= unidades[valorprojeto[3]-1]!= undefined ? unidades[valorprojeto[3]-1]+ " "+milhar:  ""
    c = centena[valorprojeto[2]-1] != undefined  ? centena[valorprojeto[2]-1] :  ""
    d = dezena[valorprojeto[1]-1] != undefined ?   dezena[valorprojeto[1]-1] :  ""
    u = unidades[valorprojeto[0]-1] != undefined ?  unidades[valorprojeto[0]-1] :  ""
    x= parseInt(valorprojeto[3]) > 0 && parseInt(valorprojeto[2]) ? " e " : "";
    y= parseInt(valorprojeto[2]) > 0  && parseInt(valorprojeto[1])? " e " : "";
    z=parseInt(valorprojeto[1]) > 0  && parseInt(valorprojeto[0])? " e " : "";
    finalmente=m+x+c+y+d+z+u+" reais";
    document.getElementById('valor_extenso').innerText = finalmente;
    //lógica para dias 
    
    projeto = String(document.getElementById('tempo-projeto').value);
    projetoArray = projeto.split("");
    tempoprojeto=[];
    projetoArray.forEach((e)=> tempoprojeto.push(parseInt(e)));
    tempoprojeto = tempoprojeto.reverse();
    c1 = centena[tempoprojeto[2]-1] != undefined  ? centena[tempoprojeto[2]-1] :  "";
    d1 = dezena[tempoprojeto[1]-1] != undefined ?   dezena[tempoprojeto[1]-1] :  "";
    u1 = unidades[tempoprojeto[0]-1] != undefined ?  unidades[tempoprojeto[0]-1] :  "";
    x1= parseInt(tempoprojeto[3]) > 0 && parseInt(tempoprojeto[2]) ? " e " : "";
    y1= parseInt(tempoprojeto[2]) > 0  && parseInt(tempoprojeto[1])? " e " : "";
    z1=parseInt(tempoprojeto[1]) > 0  && parseInt(tempoprojeto[0])? " e " : "";

    finalmente1=x1+c1+y1+d1+z1+u1+" dias";
    document.getElementById('tempo-p').innerText = finalmente1;}
   

    



    