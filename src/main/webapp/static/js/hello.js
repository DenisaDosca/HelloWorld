// $(document).ready(function () {
//     getAllUsersAsJson();
// });

function getAllUsersAsJson() {
    var url = "/json";
    $.ajax({
        url: url
    }).then(function (data) {
        var resultList = '<h3>Users:</h3>';
        for (var i = 0; i < data.length; i++) {
            resultList += '<p>' + data[i].username + ' ' + data[i].status + ' ' + data[i].age + '</p>';
        }
        $('#users').html(resultList);
    });
}