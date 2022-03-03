import $ from 'jquery'

$(document).ready(function () {
    var arr = ['', '', '',
               '', '', '',
               '', '', ''
    ];
    var x = 'X';
    var o = 'O';
    var check = false;
    var turn = Math.ceil(Math.random() * 2);

    console.log(turn);

    if (turn == 1) {
        $('.turn').html('Turn: ' + 'Player 1 ' + x)
    } else {
        $('.turn').html('Turn: ' + 'Player 2 ' + o)
    }

    $('.slot').each(function (index) {
        $(this).on('click', function () {
            if ($(this).text() != x && $(this).text() != o && check == false) {
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
                console.log("Слот уже занят либо игра закончена")
            }
            if (arr[0] === x && arr[1] === x && arr[2] === x) {
                console.log('Player 1 won!')
                $('.result').html('Player 1 - X Won!')
                check = true
            } else if (arr[3] === x && arr[4] === x && arr[5] === x) {
                console.log('Player 1 won!')
                $('.result').html('Player 1 - X Won!')
                check = true
            } else if (arr[6] === x && arr[7] === x && arr[8] === x) {
                console.log('Player 1 won!')
                $('.result').html('Player 1 - X Won!')
                check = true
            } else if (arr[0] === x && arr[3] === x && arr[6] === x) {
                console.log('Player 1 won!')
                $('.result').html('Player 1 - X Won!')
                check = true
            } else if (arr[1] === x && arr[4] === x && arr[7] === x) {
                console.log('Player 1 won!')
                $('.result').html('Player 1 - X Won!')
                check = true
            } else if (arr[2] === x && arr[5] === x && arr[8] === x) {
                console.log('Player 1 won!')
                $('.result').html('Player 1 - X Won!')
                check = true
            } else if (arr[0] === x && arr[4] === x && arr[8] === x) {
                console.log('Player 1 won!')
                $('.result').html('Player 1 - X Won!')
                check = true
            } else if (arr[2] === x && arr[4] === x && arr[6] === x) {
                console.log('Player 1 won!')
                $('.result').html('Player 1 - X Won!')
                check = true
            } else if (arr[0] === o && arr[1] === o && arr[2] === o) {
                console.log('Player 2 won!')
                $('.result').html('Player 2 - X Won!')
                check = true
            } else if (arr[3] === o && arr[4] === o && arr[5] === o) {
                console.log('Player 2 won!')
                $('.result').html('Player 2 - X Won!')
                check = true
            } else if (arr[6] === o && arr[7] === o && arr[8] === o) {
                console.log('Player 2 won!')
                $('.result').html('Player 2 - X Won!')
                check = true
            } else if (arr[0] === o && arr[3] === o && arr[6] === o) {
                console.log('Player 2 won!')
                $('.result').html('Player 2 - X Won!')
                check = true
            } else if (arr[1] === o && arr[4] === o && arr[7] === o) {
                console.log('Player 2 won!')
                $('.result').html('Player 2 - X Won!')
                check = true
            } else if (arr[2] === o && arr[5] === o && arr[8] === o) {
                console.log('Player 2 won!')
                $('.result').html('Player 2 - X Won!')
                check = true
            } else if (arr[0] === o && arr[4] === o && arr[8] === o) {
                console.log('Player 2 won!')
                $('.result').html('Player 2 - X Won!')
                check = true
            } else if (arr[2] === o && arr[4] === o && arr[6] === o) {
                console.log('Player 2 won!')
                $('.result').html('Player 2 - X Won!')
                check = true
            } else if (arr[0] != '' && arr[1] != '' && arr[2] != '' && arr[3] != '' && arr[4] != '' && arr[5] != '' && arr[6] != '' && arr[7] != '' && arr[8] != '') {
                console.log('Draw')
            }
        });
    })
});