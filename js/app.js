$(function(){

    $(".navbar a, footer a").on("click", function(e){
        e.preventDefault();
        var hash = this.hash;
        $("body,html").animate({scrollTop: $(hash).offset().top} , 1300 , function(){window.location.hash = hash;});
    });
});
