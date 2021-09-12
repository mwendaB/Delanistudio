$(document).ready(function () {
    $(".img1").click(function () {
      $(".img1").toggle(function () {
        $(".paragragh1").show(function () {
          $("#header1").css('font-size','x-large', 'font-weight','bold');
        });
      });
    });


    $(".paragraph1").click(function (){
      $(".paragraph1").hide(function () {
        $(".img1").show(function () {
          $("#header1").css('font-size','normal', 'font-weight','bold');
        });
      });
    });
  })
      
  $(document).ready(function () {
    $(".img2").click(function () {
        $(".img2").toggle(function () {
          $(".paragraph2").show(function () {
            $("#header2").css('font-size','x-large',  'font-weight','bold');
          });
        });
      });

      $(".paragraph2").click(function () {
        $(".paragraph2").toggle(function () {
          $(".img2").show(function () {
            $("#header2").css('font-size','normal', 'font-weight','bold');
          });
        });
      });
    });    
     

    $(document).ready(function () {
      $(".img3").click(function () {
        $(".img3").toggle(function () {
          $(".paragraph3").show(function () {
            $("#header3").css('font-size','x-large', 'font-weight','bold');
          });
        });
      });

  $(".paragraph3").click(function () {
    $(".paragraph3").toggle(function () {
      $(".img3").show(function () {
        $("#header3").css('font-size','normal', 'font-weight','bold');
      });
    });
  }); 
});

$(document).ready(function(){
$(".slide").hide();
  $(".slide").animate({opacity:0.2}, 1000);
  $(".jpg").hover(function () {
    $(this).find(".slide").toggle(400);
  });

});




