var app = app || {};

app.login = (function(){
   'use strict'; 
   
    var loginViewModel = (function(){
        
        var loginUsername,
            loginPassword;
        
        var login = function()
        {
           loginUsername = $('#lemail').val();
           loginPassword = $('#lpassword').val();
           
            if(loginUsername === "")
            {
                navigator.notification.alert("Please enter Username/Email.",function(){},"Notification","OK");
            }
            else if(loginPassword === "")
            {
                navigator.notification.alert("Please enter Password.",function(){},"Notification","OK");
            }
            else
            {
                app.fetchLoginData(loginUsername,loginPassword);
            }
        };
        
        return{
            login:login
        };
    }());
    return loginViewModel;
}());