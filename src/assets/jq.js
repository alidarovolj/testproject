import $ from 'jquery';

$(document).ready(function () {

    var posX = 800;
    var posY = 700;
    $(".ship").css("left", posX);
    $(".ship").css("top", posY);

    window.addEventListener('keydown', function (event) {
        console.log(posX, posY);
        if (event.keyCode == 65) {
            $('.ship').addClass('left');
            posX = posX - 25;
            $(".ship").css("left", posX);
        } else if (event.keyCode == 87) {
            $('.ship').addClass('top');
            posY = posY - 25;
            $(".ship").css("top", posY);
        } else if (event.keyCode == 83) {
            $('.ship').addClass('bottom');
            posY = posY + 25;
            $(".ship").css("top", posY);
        } else if (event.keyCode == 68) {
            $('.ship').addClass('right');
            posX = posX + 25;
            $(".ship").css("left", posX);
        }
        if ($('.ship').hasClass("top") && $(".ship").hasClass("left")) {
            $('.ship').css('transform', 'rotate(-45deg)');
            posX = posX - 45 / 1.4;
            posY = posY - 25 / 1.4;
            $(".ship").css("left", posX);
            $(".ship").css("top", posY);
        } else if ($('.ship').hasClass("top") && $(".ship").hasClass("right")) {
            $('.ship').css('transform', 'rotate(45deg)');
            posX = posX + 45 / 1.4;
            posY = posY - 25 / 1.4;
            $(".ship").css("left", posX);
            $(".ship").css("top", posY);
        } else if ($('.ship').hasClass("bottom") && $(".ship").hasClass("left")) {
            $('.ship').css('transform', 'rotate(225deg)');
            posX = posX - 45 / 1.4;
            posY = posY + 25 / 1.4;
            $(".ship").css("left", posX);
            $(".ship").css("top", posY);
        } else if ($('.ship').hasClass("bottom") && $(".ship").hasClass("right")) {
            $('.ship').css('transform', 'rotate(135deg)');
            posX = posX + 45 / 1.4;
            posY = posY + 25 / 1.4;
            $(".ship").css("left", posX);
            $(".ship").css("top", posY);
        };
    });
    $('html').on('click', function () {
        $(this).append('<img class="bullet" src="/img/bullet.5351763d.png" style="position: absolute; left: ' + posX + 'px' + '; top: ' + posY + 'px;">')
    })
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