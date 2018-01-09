$(document).ready(function() {

    $.get("data.json", function(abc) {
        alert(abc.Employee.name);
    });          

    $.get("https://testapi.io/api/learn-javascript-concepts/userdata", function(jsonData, status, otherStatus) {
        var myObj = JSON.parse(jsonData);
        alert("Data is: " + myObj.age);
    });


    $.get("https://testapi.io/api/learn-javascript-concepts/userdata").then(function(data, status, otherStatus) {
        alert("Data is: " + data);
    }, function(data, status, otherStatus) {
        var abc = "sdkf";
    });

    $.get("https://testapi.io/api/learn-javascript-concepts/userdata", function() {
        alert("First time");
    })
    .done(function(){
        alert("Second time Success");
    })
    .fail(function() { 
        alert("Failed one");
    })
    .always(function() { 
        alert("Always called");
    });
});