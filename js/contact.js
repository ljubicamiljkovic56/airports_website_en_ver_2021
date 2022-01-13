$(document).ready(function(e){
    $('#contactForm').submit(function(e) {
        e.preventDefault();

        var fname = $("input[name = firstname]").val().trim();
        var lname = $("input[name = lastname]").val().trim();
        var email = $("input[name = email]").val().trim();
        var subject = $("input[name = subject]").val();

        if(fname == '' || lname == '' || email == '' || subject == ''){
            alert('You did not fill required fields.');
        }else {
            alert('Data successfully sent.');
        }

    });
});