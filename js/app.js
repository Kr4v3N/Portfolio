$(function()
{

    $(".navbar a, footer a").on("click", function(e){
        e.preventDefault();
        var hash = this.hash;
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
                    $('#contact-form').append("<p class='thank-you alert alert-success'>Votre message a bien été envoyé. Merci de m'avoir contacté :)</p>");
                    $('#contact-form')[0].reset();
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
