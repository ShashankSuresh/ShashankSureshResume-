$(document).ready(function () {
    document.body.classList.remove('loading');
    setInterval(function () {
        $('.button-plus').animate({
            borderSpacing: 180
        }, {
            step: function (now, fx) {
                $(this).css('transform', 'rotate(' + now + 'deg)');
            },
            duration: 'slow'
        }, 'linear');
    }, 3000)
});