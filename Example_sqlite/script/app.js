var app = (function(win){
    'use strict'
    
    var db,apps;
    
    var init=function()
    {
        createDB();
        createTable();
    };
    
    var createDB = function()
    {
        
        if(window.sqlitePlugin !== undefined)
        {
            db = window.sqlitePlugin.openDatabase("SQLDB");
        }
        else
        {
            db = window.openDatabase("Sqlite","1.0","Cordova Demo",600000);
        }
    };
    
    var createTable = function()
    {
        db.transaction(function(tx){
            tx.executeSql("CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY ASC,name TEXT,email text,password text,mobile INTEGER,status text,occupation text,date DATETIME)",[]);
        });
    };
    
    var insertData = function(data)
    {
        db.transaction(function(tx){
            var nowDate = new Date();
            tx.executeSql("insert into users(name,email,password,mobile,status,occupation,date) values(?,?,?,?,?,?,?)",[data[0]['firstname'],data[1]['useremail'],data[2]['userpassword'],data[3]['usermobile'],data[4]['userstatus'],data[5]['useroccupation'],nowDate],onSuccess,onFailure);
        });
    };
    
    var onSuccess = function(tx, r) 
    {
        apps.navigate('#dashboard');
    };

    var onFailure = function(tx, e) 
    {
        console.log("SQLite Error: " + e.message);
    };
    
    var fetchLoginData = function(id,pwd)
    {
        db.transaction(function(tx){
            tx.executeSql("select * from users where email=? and password=?",[id,pwd],onLoginSuccess);
        });
        
        db.transaction(function(tx){
            tx.executeSql("select * from users order by id",[],userDataSuccess);
        });
    };
    
    var onLoginSuccess = function(tx, r)
    {
       var count = r.rows.length;
       
        if(count!==0)
        {
            apps.navigate("#dashboard");
        }
        else
        {
            navigator.notification.alert("User id does not exist",function(){},"Notification","OK");  
        }
    };
    
    var userDataSuccess = function(tx,result)
    {
        app.dashboard.loadUserData(result);
    };
    
    document.addEventListener("deviceready",init,false);
    
    apps = new kendo.mobile.Application(document.body,{skin:'flat',initial:'login'});
    
    return{
        apps:apps,
        insertData:insertData,
        fetchLoginData:fetchLoginData
    };
}(window));