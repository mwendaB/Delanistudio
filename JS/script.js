$(document).ready(function () {
    $(".img1").click(function () {
      $(".img1").toggle(function () {
        $(".paragragh1" ).show(function () {
          $("#h31").css('font-weight', 'bold');
        });
      });
    });

    // $(".img2").click(function(){
    //    $(".img2").toggle(function() {
    //        $("h32").css();
    //    });
    // });

    $(".img1").click(function () {
        $(".img1").toggle(function () {
          $(".paragraph1").show(function () {
            $("#h31").css('font-weight', 'bold');
          });
        });
      });



});