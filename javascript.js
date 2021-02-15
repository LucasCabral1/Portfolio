$(document).ready(function ($) {
$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus');
  });

   // Menu-toggle button

   $(document).ready(function() {
    $(".menu-icon").on("click", function() {
          $("nav ul").toggleClass("showing");
    });
    });

// Scrolling Effect

$(window).on("scroll", function() {
    if($(window).scrollTop()) {
          $('nav').addClass('black');
    }

    else {
          $('nav').removeClass('black');
    }
  });

  //Dropdowm
  $(".dropdown-toggle").dropdown();
  

  /*distancia de um elemento até o top*/
  function scrollApper1(){ /*Servicos*/ 

    var servicos = document.getElementById('text-servicos');
    var position = servicos.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;
    

    if(position + 50 <= screenPosition){
      servicos.classList.add('intro-appear')
    }
  }

  function scrollApper2(){

    var conhecimento = document.getElementById('texto-conhecimento');
    var position = conhecimento.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;
    

    if(position + 50 <= screenPosition){
      conhecimento.classList.add('intro-appear')
    }
  }

  function scrollApper3(){

    var portfolio = document.getElementById('texto-portfolio');
    var position = portfolio.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;
    

    if(position + 50 <= screenPosition){
      portfolio.classList.add('intro-appear')
    }
  }
  function scrollApper4(){

    var contato = document.getElementById('texto-contato');
    var position = contato.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;
    

    if(position + 50 <= screenPosition){
      contato.classList.add('intro-appear')
    }
  }

  function scrollApper5(){

    var sobre = document.getElementById('text-sobre');
    var position = sobre.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;
    

    if(position + 50 <= screenPosition){
      sobre.classList.add('intro-appear')
    }
  }

  window.addEventListener('scroll', scrollApper1);
  window.addEventListener('scroll', scrollApper2);
  window.addEventListener('scroll', scrollApper3);
  window.addEventListener('scroll', scrollApper4);
  window.addEventListener('scroll', scrollApper5);



 //Type effect
 let texts = ['Web Developer', 'Frond-End' ,'Web Designer'];
 let count = 0;
 let index = 0;
 let currentText = '';
 let letter = '';

 (function type(){

  if(count === texts.length){

    count = 0;

  }

  currentText = texts[count];
  letter = currentText.slice(0, ++index);
  
  document.querySelector('.typing').textContent = letter;

  if(letter.length === currentText.length){

    count++;
    index = 0;

  }
  setTimeout(type, 300);

  }())

  function mudar(){
    
  }


})


    
                     
                    