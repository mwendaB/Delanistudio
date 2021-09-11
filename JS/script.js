$(document).ready(function () {
    $(".img1").click(function () {
      $(".img1").toggle(function () {
        $(".paragragh1" ).show(function () {
          $("#header1").css('font-size','x-large');
        });
      });
    });

    
    $(".img2").click(function () {
        $(".img2").toggle(function () {
          $(".paragraph2").show(function () {
            $("#header2").css('font-size','x-large');
          });
        });
      });
     

      $(".img3").click(function () {
        $(".img3").toggle(function () {
          $(".paragraph3").show(function () {
            $("#header3").css('font-size','x-large');
          });
        });
      });



  $(".paragraph1").click(function () {
    $(".paragraph1").toggle(function () {
      $(".img1").show(function () {
        $("#header1").css('font-size','x-large');
      });
    });
  });


  $(".paragraph2").click(function () {
    $(".paragraph2").toggle(function () {
      $(".img2").show(function () {
        $("#header2").css('font-size','x-large');
      });
    });
  });

  $(".paragraph3").click(function () {
    $(".paragraph3").toggle(function () {
      $(".img3").show(function () {
        $("#header3").css('font-size','x-large');
      });
    });
  });


  $("#slide").hide();
  $("#slide").animate({opacity:0.2}, 1000);
  $(".anime").hover(function () {
    $(this).find("#slide").toggle(400);
  });

});

