$(function () {
    $('button').click(function(){
$('.first').fadeIn('slow');
        $('.first').addClass('animated bounceInLeft');
    });

    $('.first').click(function(){
      $('.second').fadeIn('slow');
              $('.second').addClass('animated bounceInRight');
    });

    $('.second').click(function(){
      $('.three').fadeIn('slow');
      $('.three').addClass('animated jello');
    });

    $('.three').click(function(){
      $('.four').fadeIn('slow');
      $('.carte').css('background-image','url(img/ak.jpg)').css('background-repeat','no-repeat')
      .css('background-size','contain');
      $('.carte').css('background-position','center');
      $('.four').addClass('animated jello');
    });


        $('.four').click(function(){
          $('.five').fadeIn('slow');
          $('.five').addClass('animated jello');
        });

        $('.five').click(function(){
          $('.six').fadeIn('slow');
          $('.six').addClass('animated bounceInLeft');
        });

        $('.six').click(function(){
          $('.seven').fadeIn('slow');
          $('.carte').css('background-image','url(img/wonderful.jpg)').css('background-repeat','no-repeat')
          .css('background-size','contain');
          $('.carte').css('background-position','center');
          $('.seven').addClass('animated bounceInRight');
          document.getElementById('song').play();
        });

});
