$(document).ready(function () {
    var result = JSON.parse(localStorage.getItem('user'));
    id = result.facebook_id;
    document.getElementsByClassName('name')[0].innerHTML = result.full_name;
    $.ajax({
        url: "/FinalProject/api/getUserData.php?id=" + id,
        dataType: "json",
        async: false,
        success: function (data) {
            img = document.getElementsByClassName('headshot')[0];
            img.setAttribute("src", data[0].pic);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert(textStatus, +' | ' + errorThrown);
        }
    });
});
