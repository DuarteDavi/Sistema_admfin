function subirtela(){
   window.scrollTo({
       top:0,
       behavior:"smooth"
   });
}
function aparecerbotao(){
    if (window.scrollY===0){
        //ocultar botao
        document.querySelector(".volta-topo").style.display ="none";
    }else{
        //mostrar botao
        document.querySelector(".volta-topo").style.display ="block";
    }
}
window.addEventListener("scroll", aparecerbotao);