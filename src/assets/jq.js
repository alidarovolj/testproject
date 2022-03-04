import $ from 'jquery';

$(document).ready(function () {

    var position = $('.ship').position();
    window.addEventListener('keydown', function (event) {
        var x = 1;
        if (event.keyCode == 65) {
            $('.ship').addClass('left');
            $('.ship').position();
            console.log( "left: " + position.left + ", top: " + position.top );
        } else if (event.keyCode == 87) {
            $('.ship').addClass('top');
        } else if (event.keyCode == 83) {
            $('.ship').addClass('bottom');
        } else if (event.keyCode == 68) {
            $('.ship').addClass('right');
        }
        if ($('.ship').is('.top', '.left')) {
            console.log('djhskalda')
            $('.ship').css('transform', 'rotate(-45deg)');
        };
    });
    window.addEventListener('keyup', function () {
        if (event.keyCode == 65) {
            $('.ship').removeClass('left');
            $('.ship').css('transform', '');
        } else if (event.keyCode == 87) {
            $('.ship').removeClass('top');
            $('.ship').css('transform', '');
        } else if (event.keyCode == 83) {
            $('.ship').removeClass('bottom');
            $('.ship').css('transform', '');
        } else if (event.keyCode == 68) {
            $('.ship').removeClass('right');
            $('.ship').css('transform', '');
        }
    });
});