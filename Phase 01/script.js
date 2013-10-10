$(document).ready(function () {

    //$('#profil, #textarea').hide();
    $('#profil').slideDown('slow');

    $('textarea').focus(function () {
        $('textarea').css('outline-color', '#2480AE');
    });

    $('input').focus(function () {
        $('input').css('outline-color', '#2480AE');
    });


    $('.interractionsComment').click(function () {
        $(this).next(".jQueryComment").toggle('slow');
    });

    $('.jQueryCompte, .td3').hide();
    $('#ButtonCompteModifier').click(function () {
        $('.jQueryCompte, .td3').toggle('slow');
    });

});