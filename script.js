function abrirmenu(){
    let BarraMenuAberto = document.getElementById('barra-menu')

    if(BarraMenuAberto.style.width == "0px"){
        BarraMenuAberto.style.width = "150px";
    }else{
        BarraMenuAberto.style.width = "0px";
    }

    if (BarraMenuAberto.style.height == "0px") {
        BarraMenuAberto.style.height = "380px";
    }else{
        BarraMenuAberto.style.height = "0px";
    }
}

function send(){
    let envioMensagem = document.getElementById('envio')

    if(envioMensagem.onclick){
        alert("Mensagem enviada com sucesso!")
        return
    }else{
        alert("teste")
    }

}