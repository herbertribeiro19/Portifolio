//Funcão de máquina de escrever
function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 115 * i);
    });
}
const titulo = document.querySelector('h1');
typeWriter(titulo);

typeWriter(document.querySelector('h2'));

//-----------------------------------------
//Função de abrir menu lateral
function abrirmenu() {
    let BarraMenuAberto = document.getElementById('barra-menu')

    if (BarraMenuAberto.style.width == "0px") {
        BarraMenuAberto.style.width = "150px";

    } else {
        BarraMenuAberto.style.width = "0px";
    }

    if (BarraMenuAberto.style.height == "0px") {
        BarraMenuAberto.style.height = "380px";
    } else {
        BarraMenuAberto.style.height = "0px";
    }
}

//-----------------------------------------
//Função enviar feedback
function send() {
    alert("A proposta foi enviada com sucesso, obrigado(a)!");
}
//-----------------------------------------
//Função hide or show
var btn1 = document.querySelector('#btn-sites');
var container1 = document.querySelector('.sites-projetos');

var btn2 = document.querySelector('#btn-apps');
var container2 = document.querySelector('.apps-projetos');

var btn3 = document.querySelector('#btn-uiux');
var container3 = document.querySelector('.uiux-projetos');

btn1.addEventListener('click', function () {
    if (container1.style.display === 'block') {
        container1.style.display = 'none';
    } else {
        container1.style.display = 'block';
    }
});

btn2.addEventListener('click', function () {
    if (container2.style.display === 'block') {
        container2.style.display = 'none';
    } else {
        container2.style.display = 'block';
    }
});

btn3.addEventListener('click', function () {
    if (container3.style.display === 'block') {
        container3.style.display = 'none';
    } else {
        container3.style.display = 'block';
    }
});

//-----------------------------------------
// //Função swiperJS
// var swiper = new Swiper(".swiper-projetos", {
//     effect: "coverflow",
//     grabCursor: true,
//     centeredSlides: true,
//     slidesPerView: 1.5,
//     loop: false,
//     coverflowEffect: {
//         rotate: 20,
//         stretch: 0,
//         depth: 100,
//         modifier: 1,
//         slideShadows: false,
//     },
//     breakpoints: {
//         320: {
//             slidesPerView: 1,
//             centeredSlides: false,
//             centeredSlides: true,
//             slideShadows: true,
//         },
//         768: {
//             slidesPerView: 0,
//             centeredSlides: true,
//             slideShadows: true,
//         },
//         991: {
//             slidesPerView: 1.2,
//             centeredSlides: true,
//             slideShadows: true,
//         },
//         1200: {
//             slidesPerView: 1.4,
//             centeredSlides: true,
//             slideShadows: true,
//         },
//     },
// });
//-------------------------------------


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


//-----------------------------------------
