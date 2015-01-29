var app = app || {};

app.reg = (function(){
    'use strict'
    
    var regViewModel = (function(){
        
        var username,
            email,
            password,
            mobile,
            status,
            occupation;
        
        var show = function()
        {
            console.log("show");
            $('#uname').val('');
            $('#email').val('');
            $('#password').val('');
            $('#mobile').val('');
            $('#status').val('');
            $('#occupation').val('');
        };
    
        var registration = function()
        {
            var data = [];
            
            username   = $('#uname').val();
            email      = $('#email').val();
            password   = $('#password').val();
            mobile     = $('#mobile').val();
            status     = $('#status').val();
            occupation = $('#occupation').val();
            
            if(username === "")
            {
                navigator.notification.alert("Please enter your name",function(){},"Notification","OK");
            }
            else if(email === "")
            {
                navigator.notification.alert("Please enter email address",function(){},"Notification","OK");
            }
            else if(password ==="")
            {
                navigator.notification.alert("Please enter password",function(){},"Notification","OK");
            }
            else if(mobile === "")
            {
                navigator.notification.alert("Please enter your mobile number",function(){},"Notification","OK");
            }
            else if(status === "0")
            {
                navigator.notification.alert("Please select your status",function(){},"Notification","OK");
            }
            else if(occupation === "0")
            {
                navigator.notification.alert("Please select your occupation",function(){},"Notification","OK");
            }
            else
            {
                data.push({firstname:username},{useremail:email},{userpassword:password},{usermobile:mobile},{userstatus:status},{useroccupation:occupation});
                app.insertData(data); 
            }
        };

        return{
            registration:registration,
            show:show
        };
        
    }());
    
    return regViewModel;
}());