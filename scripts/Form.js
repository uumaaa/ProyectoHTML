document.getElementById("BotonRegistro").style.color = "#80004a";
    document.getElementById("BotonInicio").style.color = "white";
var x=document.getElementById("login");
var y=document.getElementById("register");
var z=document.getElementById("btn");
function register()
{
    x.style.left="-600px";
    y.style.left="46px";
    z.style.left="50%";  
    setTimeout(() => {      document.getElementById("BotonInicio").style.color = "#80004a";
    document.getElementById("BotonRegistro").style.color = "#F9EAE1"; }, 100);
}
function login()
{
    x.style.left="46px";
    y.style.left="600px";
    z.style.left="0";
    setTimeout(() => {      document.getElementById("BotonRegistro").style.color = "#80004a";
    document.getElementById("BotonInicio").style.color = "#F9EAE1"; }, 100);
}