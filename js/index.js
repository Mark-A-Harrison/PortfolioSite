$(document).ready(function(){
  
  //select navigation sections
  $('.slide-section').click(function(e){
    
    //get the href id from clicked slide-section
    var linkHref = $(this).attr('href');
    var headerheight = 50;
    
    $('html, body').animate({
      scrollTop:$(linkHref).offset().top - headerheight  //get position of the top and the offset from top to the location of ea section
    });
    
    e.preventDefault();
  });
});