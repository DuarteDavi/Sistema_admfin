let trocaiconemoon = document.getElementById("moon");
let trocaiconesun = document.getElementById("sun");

function darkmode(){
    if (document.getElementById('btn').checked ==true){
    document.getElementById("body").classList.add("darkmode");
    trocaiconemoon.style.visibility="hidden";
    trocaiconesun.style.visibility = "visible";
}
else{
    document.getElementById("body").classList.remove("darkmode");
    trocaiconemoon.style.visibility="visible";
    trocaiconesun.style.visibility = "hidden";
    

}

}
