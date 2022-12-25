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
    let envioMensagem = document.getElementById('envio');

    if(envioMensagem.onclick){
        alert("Mensagem enviada com sucesso!");
        return;
    }
}

    //1 var swiper = new Swiper(".swiper-projetos", {
    //     effect: "cards",
    //     grabCursor: true,
    //   });

    //2 var swiper = new Swiper(".swiper-projetos", {
    //     slidesPerView: 1,
    //     spaceBetween: 0,
    //     loop: false,
    //     //grabCursor: true,
    //     // pagination: {
    //     //     el: ".swiper-pagination",
    //     //     clickable: true,
    //     // },
    //     // navigation: {
    //     //     nextEl: ".swiper-button-next",
    //     //     prevEl: ".swiper-button-prev",
    //     // },
    // });

    var swiper = new Swiper(".swiper-projetos", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 1.7,
        loop: true,
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: ".swiper-pagination",
        },
    });

