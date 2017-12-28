$(document).ready(function(){ 
 
   $("#remove").click(function(){ 
   	 $(".cart-item").hide();
   });   

   $(".art-hover-div").hide();

   $(".art-link").mouseover(function(){
     $(".art-hover-div").fadeIn(500);
   
  }); 

  $(".art-link").mouseleave(function(){
     $(".art-hover-div").hide();
  }); 

   $(".art-hover-div").mouseover(function(){
     $(".art-hover-div").show();
  }); 

   $(".art-hover-div").mouseleave(function(){
     $(".art-hover-div").fadeOut(500);
  });


   $("#calculate-text").click(function(){
     $("#calculate-dropdown").slideToggle(); 
  }); 
   
   
   $(".log").click(function(){
      $("#login").slideToggle();
  });

  $("#checkAccount").change(function(){
    
    $("#createAccount").slideToggle('slow');
  


});
  $("#shipToDiff").change(function(){
  
    $("#ShipToDifFORM").slideToggle('slow');
  
});
  $(".theRadiooo").change(function(){
    $(".weird").slideUp();
    $(this).next().next(".weird").slideDown();
  
});

  $('.modal').on('show.bs.modal', centerModal); 


  $(window).on("resize", function () {
     $('.modal:visible').each(centerModal);
}); 

$(".item-block").slice(0,9).show(); 

   $("#c-load-button").on('click', function(event) {  
        
       event.preventDefault();  

       $(".item-block:hidden").slice(0,9).show(); 


       if ($(".item-block:hidden").length == 0) { 

            $("#load").fadeOut('slow');
        } 
         
         $('#page-wrapper').animate({
              scrollTop: $(this).offset().top
         }, 2200); 

        $("#c-load-button").hide();
  });    
 

 $('.grid').isotope({
  itemSelector: '.product-block', 
    masonry: {
       
       gutter: 15
    
      }
}); 

 $(window).resize(function () {
    if (jQuery(window).innerWidth() < 800) {
        jQuery('.grid').masonry('destroy');
    } else {
        jQuery('.grid').masonry({
            itemSelector: '.product-block',
        });
    }
});

  }); 


function centerModal() { 

    $(this).css('display', 'block'); 

    var $dialog = $(this).find(".modal-dialog");
    var offset = ($(window).height() - $dialog.height()) / 2;

    $dialog.css("margin-top", offset);
}

   
   









