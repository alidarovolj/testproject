import $ from 'jquery'

$(document).ready(function () {
    var arr = ['', '', '', 
               '', '', '', 
               '', '', ''];
    var x = 'X';
    var o = 'O';
    var turn = Math.ceil(Math.random() * 2);

    console.log(turn);

    if (turn == 1) {
        $('.turn').html('Turn: ' + 'Player 1 ' + x)
    } else {
        $('.turn').html('Turn: ' + 'Player 2 ' + o)
    }

    $('.slot').each(function (index) {
        $(this).on('click', function () {
            if ($(this).text() != x && $(this).text() != o) {
                if (turn == 1) {
                    $(this).html(x);
                    turn = 2
                    arr[index] = x;
                    $('.turn').html('Turn: ' + 'Player 2 ' + o)
                    console.log(arr);
                } else {
                    $(this).html(o);
                    turn = 1
                    arr[index] = o;
                    $('.turn').html('Turn: ' + 'Player 1 ' + x)
                    console.log(arr);
                }
            } else {
                console.log("Слот уже занят")
            }
        });
    })
});