// Window resize
// var resizeTimer;

// window.addEventListener('resize', function() {

//   clearTimeout(resizeTimer);
//   resizeTimer = setTimeout(function() {
  
//     location.reload();
       
//   }, 250);

// });

// WALL
// GSAP scroll
var container = document.querySelector(".links");

gsap.to(container, {
  y: -.2 * document.documentElement.clientWidth,
  scrollTrigger: {
    trigger: container,
    start: "top 50%",
    end: "bottom bottom",
    scrub: 1
  }
});

// Mouseover parallax
// if (document.documentElement.clientWidth > 1024) {
//   $(document).ready(function() {
//     var movementStrength = 25;
//     var height = movementStrength * .5 / $(window).height();
//     var width = movementStrength  / $(window).width();
//     $(".links__section").mousemove(function(e){
//               var pageX = e.pageX - ($(window).width() / 2);
//               var pageY = e.pageY - ($(window).height() / 2);
//               var newvalueX = width * pageX * -1 - 100;
//               var newvalueY = height * pageY * -1 - 20;
//               $('.links__section').css("background-position", newvalueX+"px     "+newvalueY+"px");
//     });
//   });
// }

// $(document).ready(function() {
//   var movementStrength = 25;
//   var height = movementStrength * .5 / $(window).height();
//   var width = movementStrength  / $(window).width();
//   $(".links__style").mousemove(function(e){
//             var pageX = e.pageX - ($(window).width() / 2);
//             var pageY = e.pageY - ($(window).height() / 2);
//             var newvalueX = width * pageX * -1 - 100;
//             var newvalueY = height * pageY * -1 - 20;
//             $('.links__style').css("left", newvalueX+"px");
//             $('.links__style').css("top", newvalueY+"px");
//   });
// });

// LINKS
// Moda
const modaToggle = document.querySelector('.links__style--moda').addEventListener('click', function(){
  closeAllForms();

  document.querySelector('#moda').classList.toggle('is-hidden');

  if (!document.querySelector('#moda').classList.contains('is-hidden')) {
    $("html, body").animate(
        {
            scrollTop: $(moda).offset().top
        },
        1100
    ); 
  }
});

// Beauty
const beautyToggle = document.querySelector('.links__style--beauty').addEventListener('click', function(){
  closeAllForms();

  document.querySelector('#beauty').classList.toggle('is-hidden');

  if (!document.querySelector('#beauty').classList.contains('is-hidden')) {
    $("html, body").animate(
        {
            scrollTop: $(beauty).offset().top
        },
        1100
    ); 
  }
});

// Hrana
const hranaToggle = document.querySelector('.links__style--hrana').addEventListener('click', function(){
  closeAllForms();

  document.querySelector('#hrana').classList.toggle('is-hidden');

  if (!document.querySelector('#hrana').classList.contains('is-hidden')) {
    $("html, body").animate(
        {
            scrollTop: $(hrana).offset().top
        },
        1100
    ); 
  }
});

// Sport
const sportToggle = document.querySelector('.links__style--sport').addEventListener('click', function(){
  closeAllForms();

  document.querySelector('#sport').classList.toggle('is-hidden');

  if (!document.querySelector('#sport').classList.contains('is-hidden')) {
    $("html, body").animate(
        {
            scrollTop: $(sport).offset().top
        },
        1100
    ); 
  }
});

// Tehnologija
const techToggle = document.querySelector('.links__style--tech').addEventListener('click', function(){
  closeAllForms();

  document.querySelector('#tech').classList.toggle('is-hidden');

  if (!document.querySelector('#tech').classList.contains('is-hidden')) {
    $("html, body").animate(
        {
            scrollTop: $(tech).offset().top
        },
        1100
    ); 
  }
});

// Putovanja
const putovanjaToggle = document.querySelector('.links__style--putovanja').addEventListener('click', function(){
  closeAllForms();

  document.querySelector('#putovanja').classList.toggle('is-hidden');

  if (!document.querySelector('#putovanja').classList.contains('is-hidden')) {
    $("html, body").animate(
        {
            scrollTop: $(putovanja).offset().top
        },
        1100
    ); 
  }
});

// Tretmani
const tretmaniToggle = document.querySelector('.links__style--tretmani').addEventListener('click', function(){
  closeAllForms();

  document.querySelector('#tretmani').classList.toggle('is-hidden');

  if (!document.querySelector('#tretmani').classList.contains('is-hidden')) {
    $("html, body").animate(
        {
            scrollTop: $(tretmani).offset().top
        },
        1100
    ); 
  }
});

// shopping
const shoppingToggle = document.querySelector('.links__style--shopping').addEventListener('click', function(){
  closeAllForms();

  document.querySelector('#shopping').classList.toggle('is-hidden');

  if (!document.querySelector('#shopping').classList.contains('is-hidden')) {
    $("html, body").animate(
        {
            scrollTop: $(shopping).offset().top
        },
        1100
    ); 
  }
});

// zdravlje
const zdravljeToggle = document.querySelector('.links__style--zdravlje').addEventListener('click', function(){
  closeAllForms();

  document.querySelector('#zdravlje').classList.toggle('is-hidden');

  if (!document.querySelector('#zdravlje').classList.contains('is-hidden')) {
    $("html, body").animate(
        {
            scrollTop: $(zdravlje).offset().top
        },
        1100
    ); 
  }
});

function closeAllForms(){
  document.querySelectorAll('.form__wrapper').forEach(function(form){
    if (!form.classList.contains('is-hidden')) {
      form.classList.add('is-hidden');
    }
  });
}

// FORMS
// Anketa moda
document.querySelector('#submit-form-moda').addEventListener('click', function(e){

  const url = 'https://script.google.com/macros/s/AKfycbyVz0-rKkFVp7WyLUufA_h7_yeRvif4d2Jiq0xo6S13D6EQmlJuVopx3ktQxqOUInYH/exec';

  e.preventDefault();

  if(document.getElementById('pravila-moda').checked && document.getElementById('email-moda').value !== '' && document.getElementById('zelja-moda').value !== '') {

      document.querySelector('#submit-form-moda').classList.add('is-hidden');
      document.querySelector('.error-msg-moda').classList.add('is-hidden');
      document.querySelector('.loading-indicator-moda').classList.remove('is-hidden');

      // Remove warning borders
      document.querySelector('#pravila-checkbox-moda').style.border = '1px solid #cba37b';
      document.getElementById('email-moda').style.border = '1px solid #cba37b';
      document.getElementById('zelja-moda').style.border = '1px solid #cba37b';

      fetch(url,{
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
        'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: $('form#anketaModa').serializeJSON()
      })
        .then(document.querySelector('.loading-indicator-moda').classList.add('is-hidden'))
        .then(document.querySelector('.response-msg-moda').classList.remove('is-hidden'));
        
  } else {
    document.querySelector('.error-msg-moda').classList.remove('is-hidden');
    if (!document.getElementById('pravila-moda').checked) {
      document.querySelector('#pravila-checkbox-moda').style.border = '1px solid #e60c22';
    } else {
      document.querySelector('#pravila-checkbox-moda').style.border = '1px solid #cba37b';
    }
    if (document.getElementById('email-moda').value == '') {
      document.getElementById('email-moda').style.border = '1px solid #e60c22';
    } else {
      document.getElementById('email-moda').style.border = '1px solid #cba37b';
    }
    if (document.getElementById('zelja-moda').value == '') {
      document.getElementById('zelja-moda').style.border = '1px solid #e60c22';
    } else {
      document.getElementById('zelja-moda').style.border = '1px solid #cba37b';
    }
  }

});

// Anketa beauty
document.querySelector('#submit-form-beauty').addEventListener('click', function(e){

  const url = 'https://script.google.com/macros/s/AKfycbyVz0-rKkFVp7WyLUufA_h7_yeRvif4d2Jiq0xo6S13D6EQmlJuVopx3ktQxqOUInYH/exec';

  e.preventDefault();

  if(document.getElementById('pravila-beauty').checked && document.getElementById('email-beauty').value !== '' && document.getElementById('zelja-beauty').value !== '') {

      document.querySelector('#submit-form-beauty').classList.add('is-hidden');
      document.querySelector('.error-msg-beauty').classList.add('is-hidden');
      document.querySelector('.loading-indicator-beauty').classList.remove('is-hidden');

      // Remove warning borders
      document.querySelector('#pravila-checkbox-beauty').style.border = '1px solid #cba37b';
      document.getElementById('email-beauty').style.border = '1px solid #cba37b';
      document.getElementById('zelja-beauty').style.border = '1px solid #cba37b';

      fetch(url,{
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
        'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: $('form#anketaBeauty').serializeJSON()
      })
        .then(document.querySelector('.loading-indicator-beauty').classList.add('is-hidden'))
        .then(document.querySelector('.response-msg-beauty').classList.remove('is-hidden'));
        
  } else {
    document.querySelector('.error-msg-beauty').classList.remove('is-hidden');
    if (!document.getElementById('pravila-beauty').checked) {
      document.querySelector('#pravila-checkbox-beauty').style.border = '1px solid #e60c22';
    } else {
      document.querySelector('#pravila-checkbox-beauty').style.border = '1px solid #cba37b';
    }
    if (document.getElementById('email-beauty').value == '') {
      document.getElementById('email-beauty').style.border = '1px solid #e60c22';
    } else {
      document.getElementById('email-beauty').style.border = '1px solid #cba37b';
    }
    if (document.getElementById('zelja-beauty').value == '') {
      document.getElementById('zelja-beauty').style.border = '1px solid #e60c22';
    } else {
      document.getElementById('zelja-beauty').style.border = '1px solid #cba37b';
    }
  }

});

// Anketa tretmani
document.querySelector('#submit-form-tretmani').addEventListener('click', function(e){

  const url = 'https://script.google.com/macros/s/AKfycbyVz0-rKkFVp7WyLUufA_h7_yeRvif4d2Jiq0xo6S13D6EQmlJuVopx3ktQxqOUInYH/exec';

  e.preventDefault();

  if(document.getElementById('pravila-tretmani').checked && document.getElementById('email-tretmani').value !== '' && document.getElementById('zelja-tretmani').value !== '') {

      document.querySelector('#submit-form-tretmani').classList.add('is-hidden');
      document.querySelector('.error-msg-tretmani').classList.add('is-hidden');
      document.querySelector('.loading-indicator-tretmani').classList.remove('is-hidden');

      // Remove warning borders
      document.querySelector('#pravila-checkbox-tretmani').style.border = '1px solid #cba37b';
      document.getElementById('email-tretmani').style.border = '1px solid #cba37b';
      document.getElementById('zelja-tretmani').style.border = '1px solid #cba37b';

      fetch(url,{
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
        'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: $('form#anketaTretmani').serializeJSON()
      })
        .then(document.querySelector('.loading-indicator-tretmani').classList.add('is-hidden'))
        .then(document.querySelector('.response-msg-tretmani').classList.remove('is-hidden'));
        
  } else {
    document.querySelector('.error-msg-tretmani').classList.remove('is-hidden');
    if (!document.getElementById('pravila-tretmani').checked) {
      document.querySelector('#pravila-checkbox-tretmani').style.border = '1px solid #e60c22';
    } else {
      document.querySelector('#pravila-checkbox-tretmani').style.border = '1px solid #cba37b';
    }
    if (document.getElementById('email-tretmani').value == '') {
      document.getElementById('email-tretmani').style.border = '1px solid #e60c22';
    } else {
      document.getElementById('email-tretmani').style.border = '1px solid #cba37b';
    }
    if (document.getElementById('zelja-tretmani').value == '') {
      document.getElementById('zelja-tretmani').style.border = '1px solid #e60c22';
    } else {
      document.getElementById('zelja-tretmani').style.border = '1px solid #cba37b';
    }
  }

});

// Anketa putovanja
document.querySelector('#submit-form-putovanja').addEventListener('click', function(e){

  const url = 'https://script.google.com/macros/s/AKfycbyVz0-rKkFVp7WyLUufA_h7_yeRvif4d2Jiq0xo6S13D6EQmlJuVopx3ktQxqOUInYH/exec';

  e.preventDefault();

  if(document.getElementById('pravila-putovanja').checked && document.getElementById('email-putovanja').value !== '' && document.getElementById('zelja-putovanja').value !== '') {

      document.querySelector('#submit-form-putovanja').classList.add('is-hidden');
      document.querySelector('.error-msg-putovanja').classList.add('is-hidden');
      document.querySelector('.loading-indicator-putovanja').classList.remove('is-hidden');

      // Remove warning borders
      document.querySelector('#pravila-checkbox-putovanja').style.border = '1px solid #cba37b';
      document.getElementById('email-putovanja').style.border = '1px solid #cba37b';
      document.getElementById('zelja-putovanja').style.border = '1px solid #cba37b';

      fetch(url,{
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
        'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: $('form#anketaPutovanja').serializeJSON()
      })
        .then(document.querySelector('.loading-indicator-putovanja').classList.add('is-hidden'))
        .then(document.querySelector('.response-msg-putovanja').classList.remove('is-hidden'));
        
  } else {
    document.querySelector('.error-msg-putovanja').classList.remove('is-hidden');
    if (!document.getElementById('pravila-putovanja').checked) {
      document.querySelector('#pravila-checkbox-putovanja').style.border = '1px solid #e60c22';
    } else {
      document.querySelector('#pravila-checkbox-putovanja').style.border = '1px solid #cba37b';
    }
    if (document.getElementById('email-putovanja').value == '') {
      document.getElementById('email-putovanja').style.border = '1px solid #e60c22';
    } else {
      document.getElementById('email-putovanja').style.border = '1px solid #cba37b';
    }
    if (document.getElementById('zelja-putovanja').value == '') {
      document.getElementById('zelja-putovanja').style.border = '1px solid #e60c22';
    } else {
      document.getElementById('zelja-putovanja').style.border = '1px solid #cba37b';
    }
  }

});

// Anketa šoping
document.querySelector('#submit-form-shopping').addEventListener('click', function(e){

  const url = 'https://script.google.com/macros/s/AKfycbyVz0-rKkFVp7WyLUufA_h7_yeRvif4d2Jiq0xo6S13D6EQmlJuVopx3ktQxqOUInYH/exec';

  e.preventDefault();

  if(document.getElementById('pravila-shopping').checked && document.getElementById('email-shopping').value !== '' && document.getElementById('zelja-shopping').value !== '') {

      document.querySelector('#submit-form-shopping').classList.add('is-hidden');
      document.querySelector('.error-msg-shopping').classList.add('is-hidden');
      document.querySelector('.loading-indicator-shopping').classList.remove('is-hidden');

      // Remove warning borders
      document.querySelector('#pravila-checkbox-shopping').style.border = '1px solid #cba37b';
      document.getElementById('email-shopping').style.border = '1px solid #cba37b';
      document.getElementById('zelja-shopping').style.border = '1px solid #cba37b';

      fetch(url,{
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
        'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: $('form#anketaShopping').serializeJSON()
      })
        .then(document.querySelector('.loading-indicator-shopping').classList.add('is-hidden'))
        .then(document.querySelector('.response-msg-shopping').classList.remove('is-hidden'));
        
  } else {
    document.querySelector('.error-msg-shopping').classList.remove('is-hidden');
    if (!document.getElementById('pravila-shopping').checked) {
      document.querySelector('#pravila-checkbox-shopping').style.border = '1px solid #e60c22';
    } else {
      document.querySelector('#pravila-checkbox-shopping').style.border = '1px solid #cba37b';
    }
    if (document.getElementById('email-shopping').value == '') {
      document.getElementById('email-shopping').style.border = '1px solid #e60c22';
    } else {
      document.getElementById('email-shopping').style.border = '1px solid #cba37b';
    }
    if (document.getElementById('zelja-shopping').value == '') {
      document.getElementById('zelja-shopping').style.border = '1px solid #e60c22';
    } else {
      document.getElementById('zelja-shopping').style.border = '1px solid #cba37b';
    }
  }

});

// Anketa hrana
document.querySelector('#submit-form-hrana').addEventListener('click', function(e){

  const url = 'https://script.google.com/macros/s/AKfycbyVz0-rKkFVp7WyLUufA_h7_yeRvif4d2Jiq0xo6S13D6EQmlJuVopx3ktQxqOUInYH/exec';

  e.preventDefault();

  if(document.getElementById('pravila-hrana').checked && document.getElementById('email-hrana').value !== '' && document.getElementById('zelja-hrana').value !== '') {

      document.querySelector('#submit-form-hrana').classList.add('is-hidden');
      document.querySelector('.error-msg-hrana').classList.add('is-hidden');
      document.querySelector('.loading-indicator-hrana').classList.remove('is-hidden');

      // Remove warning borders
      document.querySelector('#pravila-checkbox-hrana').style.border = '1px solid #cba37b';
      document.getElementById('email-hrana').style.border = '1px solid #cba37b';
      document.getElementById('zelja-hrana').style.border = '1px solid #cba37b';

      fetch(url,{
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
        'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: $('form#anketaHrana').serializeJSON()
      })
        .then(document.querySelector('.loading-indicator-hrana').classList.add('is-hidden'))
        .then(document.querySelector('.response-msg-hrana').classList.remove('is-hidden'));
        
  } else {
    document.querySelector('.error-msg-hrana').classList.remove('is-hidden');
    if (!document.getElementById('pravila-hrana').checked) {
      document.querySelector('#pravila-checkbox-hrana').style.border = '1px solid #e60c22';
    } else {
      document.querySelector('#pravila-checkbox-hrana').style.border = '1px solid #cba37b';
    }
    if (document.getElementById('email-hrana').value == '') {
      document.getElementById('email-hrana').style.border = '1px solid #e60c22';
    } else {
      document.getElementById('email-hrana').style.border = '1px solid #cba37b';
    }
    if (document.getElementById('zelja-hrana').value == '') {
      document.getElementById('zelja-hrana').style.border = '1px solid #e60c22';
    } else {
      document.getElementById('zelja-hrana').style.border = '1px solid #cba37b';
    }
  }

});

// Anketa zdravlje
document.querySelector('#submit-form-zdravlje').addEventListener('click', function(e){

  const url = 'https://script.google.com/macros/s/AKfycbyVz0-rKkFVp7WyLUufA_h7_yeRvif4d2Jiq0xo6S13D6EQmlJuVopx3ktQxqOUInYH/exec';

  e.preventDefault();

  if(document.getElementById('pravila-zdravlje').checked && document.getElementById('email-zdravlje').value !== '' && document.getElementById('zelja-zdravlje').value !== '') {

      document.querySelector('#submit-form-zdravlje').classList.add('is-hidden');
      document.querySelector('.error-msg-zdravlje').classList.add('is-hidden');
      document.querySelector('.loading-indicator-zdravlje').classList.remove('is-hidden');

      // Remove warning borders
      document.querySelector('#pravila-checkbox-zdravlje').style.border = '1px solid #cba37b';
      document.getElementById('email-zdravlje').style.border = '1px solid #cba37b';
      document.getElementById('zelja-zdravlje').style.border = '1px solid #cba37b';

      fetch(url,{
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
        'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: $('form#anketaZdravlje').serializeJSON()
      })
        .then(document.querySelector('.loading-indicator-zdravlje').classList.add('is-hidden'))
        .then(document.querySelector('.response-msg-zdravlje').classList.remove('is-hidden'));
        
  } else {
    document.querySelector('.error-msg-zdravlje').classList.remove('is-hidden');
    if (!document.getElementById('pravila-zdravlje').checked) {
      document.querySelector('#pravila-checkbox-zdravlje').style.border = '1px solid #e60c22';
    } else {
      document.querySelector('#pravila-checkbox-zdravlje').style.border = '1px solid #cba37b';
    }
    if (document.getElementById('email-zdravlje').value == '') {
      document.getElementById('email-zdravlje').style.border = '1px solid #e60c22';
    } else {
      document.getElementById('email-zdravlje').style.border = '1px solid #cba37b';
    }
    if (document.getElementById('zelja-zdravlje').value == '') {
      document.getElementById('zelja-zdravlje').style.border = '1px solid #e60c22';
    } else {
      document.getElementById('zelja-zdravlje').style.border = '1px solid #cba37b';
    }
  }

});

// Anketa tehnologija
document.querySelector('#submit-form-tech').addEventListener('click', function(e){

  const url = 'https://script.google.com/macros/s/AKfycbyVz0-rKkFVp7WyLUufA_h7_yeRvif4d2Jiq0xo6S13D6EQmlJuVopx3ktQxqOUInYH/exec';

  e.preventDefault();

  if(document.getElementById('pravila-tech').checked && document.getElementById('email-tech').value !== '' && document.getElementById('zelja-tech').value !== '') {

      document.querySelector('#submit-form-tech').classList.add('is-hidden');
      document.querySelector('.error-msg-tech').classList.add('is-hidden');
      document.querySelector('.loading-indicator-tech').classList.remove('is-hidden');

      // Remove warning borders
      document.querySelector('#pravila-checkbox-tech').style.border = '1px solid #cba37b';
      document.getElementById('email-tech').style.border = '1px solid #cba37b';
      document.getElementById('zelja-tech').style.border = '1px solid #cba37b';

      fetch(url,{
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
        'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: $('form#anketaTech').serializeJSON()
      })
        .then(document.querySelector('.loading-indicator-tech').classList.add('is-hidden'))
        .then(document.querySelector('.response-msg-tech').classList.remove('is-hidden'));
        
  } else {
    document.querySelector('.error-msg-tech').classList.remove('is-hidden');
    if (!document.getElementById('pravila-tech').checked) {
      document.querySelector('#pravila-checkbox-tech').style.border = '1px solid #e60c22';
    } else {
      document.querySelector('#pravila-checkbox-tech').style.border = '1px solid #cba37b';
    }
    if (document.getElementById('email-tech').value == '') {
      document.getElementById('email-tech').style.border = '1px solid #e60c22';
    } else {
      document.getElementById('email-tech').style.border = '1px solid #cba37b';
    }
    if (document.getElementById('zelja-tech').value == '') {
      document.getElementById('zelja-tech').style.border = '1px solid #e60c22';
    } else {
      document.getElementById('zelja-tech').style.border = '1px solid #cba37b';
    }
  }

});

// Anketa sport
document.querySelector('#submit-form-sport').addEventListener('click', function(e){

  const url = 'https://script.google.com/macros/s/AKfycbyVz0-rKkFVp7WyLUufA_h7_yeRvif4d2Jiq0xo6S13D6EQmlJuVopx3ktQxqOUInYH/exec';

  e.preventDefault();

  if(document.getElementById('pravila-sport').checked && document.getElementById('email-sport').value !== '' && document.getElementById('zelja-sport').value !== '') {

      document.querySelector('#submit-form-sport').classList.add('is-hidden');
      document.querySelector('.error-msg-sport').classList.add('is-hidden');
      document.querySelector('.loading-indicator-sport').classList.remove('is-hidden');

      // Remove warning borders
      document.querySelector('#pravila-checkbox-sport').style.border = '1px solid #cba37b';
      document.getElementById('email-sport').style.border = '1px solid #cba37b';
      document.getElementById('zelja-sport').style.border = '1px solid #cba37b';

      fetch(url,{
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
        'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: $('form#anketaSport').serializeJSON()
      })
        .then(document.querySelector('.loading-indicator-sport').classList.add('is-hidden'))
        .then(document.querySelector('.response-msg-sport').classList.remove('is-hidden'));
        
  } else {
    document.querySelector('.error-msg-sport').classList.remove('is-hidden');
    if (!document.getElementById('pravila-sport').checked) {
      document.querySelector('#pravila-checkbox-sport').style.border = '1px solid #e60c22';
    } else {
      document.querySelector('#pravila-checkbox-sport').style.border = '1px solid #cba37b';
    }
    if (document.getElementById('email-sport').value == '') {
      document.getElementById('email-sport').style.border = '1px solid #e60c22';
    } else {
      document.getElementById('email-sport').style.border = '1px solid #cba37b';
    }
    if (document.getElementById('zelja-sport').value == '') {
      document.getElementById('zelja-sport').style.border = '1px solid #e60c22';
    } else {
      document.getElementById('zelja-sport').style.border = '1px solid #cba37b';
    }
  }

});