var app = app || {};

app.dashboard = (function(){
    
    dashViewModel = (function(){
        
        var logout = function()
        {
            app.login.userLogout();
        };
        
        var show = function()
        {
            //loadUserData(data);
        };
        
        var loadUserData = function(res)
        {
            var rowOutput = "";
            var todoItems = document.getElementById("userList");
            for (var i = 0; i < res.rows.length; i++) {
                rowOutput += renderData(res.rows.item(i));
            }

            todoItems.innerHTML = rowOutput;
        };
        
        var renderData = function(row)
        {
            return "<li>" + "<div class='todo-check'></div>" + row.name + "<a class='button delete' href='javascript:void(0);'  onclick='app.deleteTodo(" + row.ID + ");'><p class='todo-delete'></p></a>" + "<div class='clear'></div>" + "</li>";
        }
        
        return{
            logout:logout,
            show:show,
            loadUserData:loadUserData
        };
    }());
    
    return dashViewModel;
}());