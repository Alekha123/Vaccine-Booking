let sFname=document.getElementById('sname');
let sEmail=document.getElementById('semail');
let sAge=document.getElementById('sage');
let sNumber=document.getElementById('snumber');
let sAadhar=document.getElementById('saadhar');
let sAddress=document.getElementById('saddress');
let sDate=document.getElementById('sdate');


sFname.textContent= localStorage.getItem("name");
 sEmail.textContent=localStorage.getItem("email");
 sAge.textContent=localStorage.getItem("age");
 sNumber.textContent=localStorage.getItem("number");
 sAadhar.textContent=localStorage.getItem("Aadhar");
 sAddress.textContent=localStorage.getItem("address");
 sDate.textContent=localStorage.getItem("date");