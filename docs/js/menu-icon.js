$(function(){
  $('.bar').click(function(){
    $('.menu').slideDown();
    $('.header').css('height', '400px');
    $('.bar').hide();
    $('.delete').show();
  });
  $('.delete').click(function(){
    $('.menu').slideUp();
    $('.header').css('height', '100px');
    $('.delete').hide();
    $('.bar').show();
  });
});