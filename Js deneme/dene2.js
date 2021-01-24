var storedNames = JSON.parse(localStorage.getItem("names"));

console.log(storedNames);
var name= storedNames[0];
var surname= storedNames[1];
var age= storedNames[2];
var date= storedNames[3];
var phone= storedNames[4];
var gender= storedNames[5];
var email= storedNames[6];
var hometown= storedNames[7];
var specifications= storedNames[8];

document.getElementById("name_").innerHTML="<p>"+ name +"</p>"
document.getElementById("surname_").innerHTML="<p>"+ surname +"</p>"
document.getElementById("age_").innerHTML="<p>"+ age +"</p>"
document.getElementById("date_").innerHTML="<p>"+ date +"</p>"
document.getElementById("number_").innerHTML="<p>"+ phone +"</p>"
document.getElementById("gender_").innerHTML="<p>"+ gender +"</p>"
document.getElementById("email_").innerHTML="<p>"+ email +"</p>"
document.getElementById("hometown_").innerHTML="<p>"+ hometown +"</p>"
document.getElementById("specifications_").innerHTML="<p>"+ specifications +"</p>"