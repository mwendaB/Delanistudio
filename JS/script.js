$(document).ready(function () {
    $(".img1").click(function () {
      $(".img1").toggle(function () {
        $(".paragragh1" ).show(function () {
          $("#h31").css('font-weight', 'bold');
        });
      });
    });

    
    $(".img2").click(function () {
        $(".img2").toggle(function () {
          $(".paragraph2").show(function () {
            $("#h32").css('font-weight', 'bold');
          });
        });
      });
     

      $(".img3").click(function () {
        $(".img3").toggle(function () {
          $(".paragraph3").show(function () {
            $("#h33").css('font-weight', 'bold');
          });
        });
      });


});