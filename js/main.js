$(document).ready(function() {
    $('.num').counterUp({delay:10, time:2000});
});

$(document).on("scroll", function(){
    if
  ($(document).scrollTop() > 3){
      $(".head").addClass("sticky");
      $(".logo").addClass("logo-image");
      
    }
    else
    {   
        
        $(".head").removeClass("sticky"); 
        $(".logo").removeClass("logo-image");
    }
});