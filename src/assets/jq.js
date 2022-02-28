import $ from 'jquery'


$(document).ready(function () {
    var a = null;
    var b = null;
    var c = null;
    var obj = {};
    var arr = [{
            "id": 1,
            "title": "Название события",
            "desc": "Описание",
            "status": true
        },
        {
            "id": 2,
            "title": "Название события",
            "desc": "Описание",
            "status": true
        },
        {
            "id": 3,
            "title": "Название события",
            "desc": "Описание",
            "status": true
        },
        {
            "id": 4,
            "title": "Название события",
            "desc": "Описание",
            "status": true
        }
    ]

    $('select').on('click', function () {
        a = parseInt($(this).val());
        console.log(a);
    });

    $('.titleSet').on('keyup', function () {
        b = $(this).val();
        console.log(b)
    })

    $('.descSet').on('keyup', function () {
        c = $(this).val();
        console.log(c)
    })

    $('.subSet').on('click', function () {
        obj.id = a;
        obj.title = b;
        obj.desc = c;
        obj.status = true;
        if (obj.id != null && obj.title != null && obj.desc != null) {
            arr.push(obj);
            console.log(arr);
            $('.addBlock').remove();
            $('.calendar').append('<div class="addBlock"></div>');
            $.each(arr, function (index, value) {
                $('.addBlock').append("<div class='single singleBlock-" + index + "'>" + "<img />" + "<div class='date'><p></p><small></small></div>" + "<h1></h1>" + "</div>");
                $('.addBlock .singleBlock-' + index + ' .date p').append("#" + value.id);
                $('.addBlock .singleBlock-' + index + ' .date small').append(value.desc);
                $('.addBlock .singleBlock-' + index + ' h1').append(value.title);
            });
        } else {
            console.log("у вас есть ошибка")
        }
    });
});