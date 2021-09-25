 $(document).ready(function () {
    $('#mob-menu').click(function (e) { 
        e.preventDefault();
        $('#navbar').toggleClass('active');
    });
});