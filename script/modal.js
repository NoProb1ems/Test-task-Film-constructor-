$(document).ready(function() {  



$('.addFilm').click(function(event) {
    if ($('.modalwindow').hasClass('rot0') ){
    $('.addFilm img').css('transform', 'rotate(45deg)');
    $('.modalwindow').removeClass('rot0');
    $('.modalwindow').fadeOut(500);
    $('#overlay').fadeOut(500);
    console.log('1');
    }
    else {
    $('.addFilm img').css('transform', 'rotate(0deg)');
    $('.modalwindow').addClass('rot0');
    }
});
    $('a[name=modalAdd]').click(function(e) {
        e.preventDefault();
        $('.modalwindow').fadeIn(500); 
        $('#overlay').fadeIn(500);
    });
     $('.modalwindow .close').click(function (e) {
        e.preventDefault();
        $('.modalwindow').fadeOut(500);
        $('#overlay').fadeOut(500);
        $('.modalwindow').removeClass('rot0');
        $('.addFilm img').css('transform', 'rotate(45deg)');
    });           
        $('.modalwindow .cancel').click(function (e) {
        e.preventDefault();
        $('.modalwindow').fadeOut(500);
        $('#overlay').fadeOut(500);
        $('.modalwindow').removeClass('rot0');
        $('.addFilm img').css('transform', 'rotate(45deg)');
    });      
        $('.modalwindow .adds').click(function (e) {
        e.preventDefault();
        $('.modalwindow').fadeOut(500);
        $('#overlay').fadeOut(500);
        $('.modalwindow').removeClass('rot0');
        $('.addFilm img').css('transform', 'rotate(45deg)');
    }); 
 
});



    $('.modalwindow2 .close2').click(function (e) {
        e.preventDefault();
        $('.modalwindow2').fadeOut(500);
        $('#overlay').fadeOut(500);
    }); 

        $('#closeEdit').click(function (e) {
        e.preventDefault();
        $('.modalwindow2').fadeOut(500);
        $('#overlay').fadeOut(500);
    }); 

    $('#edit').click(function (e) {
        e.preventDefault();
        $('.modalwindow2').fadeOut(500);
        $('#overlay').fadeOut(500);
    }); 