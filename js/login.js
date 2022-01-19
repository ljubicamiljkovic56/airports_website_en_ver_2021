$(document).ready(function (e){
    $('#loginForm').submit(function (e){
        e.preventDefault();

        var username = $("input[name=username]").val().trim();
        var password = $("input[name=password]").val().trim();

        if(username == '' || password == ''){
            alert('Empty username or password!');
        }else {
            $.ajax({
                url: $("#loginForm").attr("action"),
                type: "GET",
                dataType: "json",
                success: function(response){
                    var name = "";
                    for(var i = 0; i<response.length; i++){
                        var user = response[i];
                        if(user.email == username && user.username == password){
                            name = user.name;
                            break;
                        }
                    }
                    if(name = ""){
                        alert("Invalid data");
                    }else {
                        window.location.replace("flights.html?user=" + name);
                    }
                },
                error: function(request,error, message) {
                    alert("Error: " + message);
                }
            });
        }
    });
});