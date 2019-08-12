$(document).ready(function() {
    $('.num').counterUp({delay:10, time:2000});
});

$(document).on("scroll", function(){
    if
  ($(document).scrollTop() > 3){
      $("header").addClass("sticky");
      $(".logo").addClass("logo-image");
      
    }
    else
    {   
        
        $("header").removeClass("sticky"); 
        $(".logo").removeClass("logo-image");
    }
});