
$('.c_txt .o').on('click', function () {
    $('.cover').fadeIn();
    let _img = $(this).html();
    $('.cover figure').html(_img);

});
$('.cover .cls').on('click', function () {
    $(this).parent().fadeOut();
})