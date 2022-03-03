import $ from 'jquery';

$(document).ready(function () {
    $('.manage p:nth-child(1)').on('click', function() {
        $('.ship').addClass('top');
        $('.ship').removeClass('right');
        $('.ship').removeClass('left');
        $('.ship').removeClass('bottom');
    });
    $('.manage p:nth-child(2)').on('click', function() {
        $('.ship').addClass('left');
        $('.ship').removeClass('right');
        $('.ship').removeClass('top');
        $('.ship').removeClass('bottom');
    });
    $('.manage p:nth-child(3)').on('click', function() {
        $('.ship').addClass('right')
        $('.ship').removeClass('top');
        $('.ship').removeClass('bottom');
        $('.ship').removeClass('left');
    });
    $('.manage p:nth-child(4)').on('click', function() {
        $('.ship').addClass('bottom')
        $('.ship').removeClass('top');
        $('.ship').removeClass('right');
        $('.ship').removeClass('left');
    });
});