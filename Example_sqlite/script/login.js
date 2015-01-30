var app = app || {};

app.login = (function(){
    
   
    loginViewModel = (function(){
        
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
        
        var userLogout = function()
        {
            $('#lemail').val('');
            $('#lpassword').val('');
            app.apps.navigate('#login');
        };
         
    
        return{
            login:login,
            userLogout:userLogout
        };
        
    }());
    
    return loginViewModel;
}());