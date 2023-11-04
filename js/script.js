$(document).ready(function() {
    generate_qr();
    load_resume();
    $('#btn-qr').fancybox({
        openEffect : 'elastic',
        closeEffect : 'elastic',
    });
    $('#btn-resume').fancybox({
        openEffect : 'elastic',
        closeEffect : 'elastic',
    });
    $("#content").fadeIn(1000);
});
