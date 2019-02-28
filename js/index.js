$(document).ready(function() {
    var elID = 0;
    $("#submitButton").click(function() {
        var input = $("#input").val();
        $("#input").val("");
        var element = '<li class="myList"' + "id=" + elID + ' > ' + input +
            ' <br> <button id=b' + elID + '> check </button> <button id=d' + elID + '> delete </button> </li>';

        $("ul").append(element);

        var b = "#b" + elID;
        var d = "#d" + elID;
        var l = "#" + elID;


        $(b).click(function() {

            if ($(l).hasClass("linethrough")) {
                $(l).removeClass("linethrough")
            } else {
                $(l).addClass("linethrough")
            }

        })

        $(d).click(function() {
            $(l).remove();
        })

        elID += 1;
    })





})