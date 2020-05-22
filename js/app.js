$(function()
{

    $(".navbar a, footer a").on("click", function(e){
        e.preventDefault();
        let hash = this.hash;
        $("body,html").animate({scrollTop: $(hash).offset().top} , 1300 , function(){window.location.hash = hash;});
    });

    $('#contact-form').submit(function(e) {
        e.preventDefault();
        $('.comments').empty();
        let postdata = $('#contact-form').serialize();

        $.ajax({
            type: 'POST',
            url: '/php/contact.php',
            data: postdata,
            dataType: 'json',
            success: function(json) {

                if(json.isSuccess)
                {
                    $('#contact-form').append("<div id='flash' class='thank-you alert alert-success'>Votre message a bien été envoyé</div>");
                    $('#contact-form')[0].reset();
                    window.setTimeout('$("#flash").hide(4000)', 6000);
                }
                else
                {
                    $('#firstname + .comments').html(json.firstnameError);
                    $('#name + .comments').html(json.nameError);
                    $('#email + .comments').html(json.emailError);
                    $('#phone + .comments').html(json.phoneError);
                    $('#message + .comments').html(json.messageError);
                }
            }
        });
    });
});
