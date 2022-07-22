

function getData()
{
    let Fname=document.getElementById('name').value;
    let Email=document.getElementById('Email').value;
    let Age=document.getElementById('Age').value;
    let Number=document.getElementById('Phone').value;
    let Aadhar=document.getElementById('Aadhar').value;
    let Address=document.getElementById('Address').value;
    let Date=document.getElementById('Date').value;
    
    location.href = 'Admin.html';

    localStorage.setItem("name",Fname);
    localStorage.setItem("email",Email);
    localStorage.setItem("age",Age);
    localStorage.setItem("number",Number);
    localStorage.setItem("Aadhar",Aadhar);
    localStorage.setItem("address",Address);
    localStorage.setItem("date",Date);


   
}