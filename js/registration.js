$(document).ready(function (e) {
    $('#regForm').submit(function (e) {
        e.preventDefault();

        var firstname = $("input[name = firstname]").val().trim();
        var lastname = $("input[name = lastname]").val().trim();
        var email = $("input[name = email]").val().trim();
        var username = $("input[name = username]").val().trim();
        var password = $("input[name = password]").val().trim();

        if(firstname == '' || lastname == '' || email == '' || username == '' || password == ''){
            alert('Some fields are empty! Please, fill all the fields');
        }else {
            alert('Successful registration!');
        }
    });
});