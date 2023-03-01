document.getElementById("BotonRegistro").style.color = "#80004a";
    document.getElementById("BotonInicio").style.color = "white";
var x=document.getElementById("login");
var y=document.getElementById("register");
var z=document.getElementById("btn");
function register()
{
    x.style.left="-400px";
    y.style.left="50px";
    z.style.left="110px";  
    document.getElementById("BotonInicio").style.color = "#80004a";
    document.getElementById("BotonRegistro").style.color = "#F9EAE1";
}
function login()
{
    x.style.left="50px";
    y.style.left="450px";
    z.style.left="0px";
    document.getElementById("BotonRegistro").style.color = "#80004a";
    document.getElementById("BotonInicio").style.color = "#F9EAE1";
}