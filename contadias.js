function contadias(){
    //dados em milissegundos e conversoes para datas
    milissegundos = Date.parse(new Date());
    var diasprojeto = document.getElementById("tempo-projeto").value;
    datafinalmil = milissegundos + (1000*3600*24*diasprojeto);
    datafinal = new Date(datafinalmil);


    dataatual= new Date()
    diainicio = dataatual.getDate();
    mesinicio = dataatual.getMonth()+1;
    anoinicio = dataatual.getFullYear();
//formatando data inicial
    var diainicio_formatado;
    if (diainicio <10 ) {
        diainicio_formatado = "0"+ diainicio;
    }else{
        diainicio_formatado = diainicio;
    }

    var mesinicio_formatado;
    if (mesinicio <10){
        mesinicio_formatado = "0" + mesinicio;
    }else{
        mesinicio_formatado = mesinicio;
    }
    datainicio_formatado = diainicio_formatado +'/'+ mesinicio_formatado +'/'+ anoinicio

    diafinal = datafinal.getDate();
    mesfinal = datafinal.getMonth()+1;
    anofinal = datafinal.getFullYear();


//formatando a data final
    var diafinal_formatado;	
    if (diafinal < 10) {
        diafinal_formatado = '0'+ diafinal;
    } else {
        diafinal_formatado = diafinal;
    }
		
    var mesfinal_formatado;	
    if (mesfinal < 10) {
        mesfinal_formatado = '0'+ mesfinal;
    } else {
        mesfinal_formatado = mesfinal;
    }
//escrevendo a data no documento após os dias serem postos no input
    datafinal_formatado = diafinal_formatado +'/'+ mesfinal_formatado +'/'+ anofinal;
    document.getElementById("data-final").innerText = "Data Final:" + datafinal_formatado;
    document.getElementById("data-inicio").innerText = "Data Inicial:" + datainicio_formatado;
 

}


    
    
