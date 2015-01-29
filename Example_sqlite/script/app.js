var app = (function(win){
    'use strict'
    
    var db;
    
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
        console.log(data);
        db.transaction(function(tx){
            var nowDate = new Date();
            tx.executeSql("insert into users(name,email,password,mobile,status,occupation,date) values(?,?,?,?,?,?,?)",[data['name'],data['email'],data['password'],data['mobile'],data['status'],data['occupation'],nowDate],onSuccess,onFailure);
        });
        
    };
    
    var onSuccess = function(tx, r) 
    {
        console.log(tx);
        console.log(r);
        console.log("Your SQLite query was successful!");
    };

    var onFailure = function(tx, e) 
    {
        console.log(tx);
        console.log("SQLite Error: " + e.message);
    };
    
    document.addEventListener("deviceready",init,false);
    
    
    var apps = new kendo.mobile.Application(document.body,{skin:'flat'});
    
    return{
        apps:apps,
        insertData:insertData
    };
}(window));