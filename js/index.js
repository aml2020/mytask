/*(document).ready(function(){
    var loading = $(".loading");
    loading.delay(loading.attr("delay-hide")).slideUp();
  });

// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {=
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});

$(window.scroll(funtion(){
    let scrollTop=$(window.scrollTop();

    if(scrollTop>profileOffest)
    {
    $("navbar").css("backgroundColor","rgba(0,0,0,0.6"))
    }
    )
}





 */
 $(document).ready(function(){
     $("#loading").fadeOut(2000,function(){
        $("body").css("overflow","auto");
    });
 });



 $( document ).ready(function() {
    $(".btn-search").click(function(){
      $("form").slideToggle("500", "easeInOutCirc");
      $(".sb").focus();
    });
    
    
  });