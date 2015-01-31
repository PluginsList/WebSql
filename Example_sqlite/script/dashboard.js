var app = app || {};

app.dashboard = (function(){
   'use strict';
    
    var dashViewModel = (function(){
        
        var userLogout = function()
        {
            $('#lemail').val('');
            $('#lpassword').val('');
            localStorage.setItem('loginStatus',false);
            app.apps.navigate('#login');
        };
        
        return{
            userLogout:userLogout
        };
    }());
    
    return dashViewModel;
}());