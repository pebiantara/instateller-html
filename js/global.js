$(document).on('ready page:load', function(){
  $('.number a').on('click', function(){
  	input = $('.device-input');
  	text = input.val();
  	text = text + $(this).text();
  	input.val(text);
  })
  $(".delete a").on('click', function(){
  	input = $('.device-input');
  	text = input.val();
  	text = text.slice(0, -1);
  	input.val(text);  	
  })
  $(".enter a").on('click', function(){
  	if($(".device-input").val() != '')
      $('.device form').submit();
  })
  $('.scanner a').hover(function(){
    $(this).find('span').removeClass('down-arrow').addClass('down-arrow-hover');
  }, function(){
    $(this).find('span').addClass('down-arrow').removeClass('down-arrow-hover');    
  })
});