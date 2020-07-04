function setpantalla(resultado){
document.getElementById('pantalla').innerHTML = resultado;
}

function getpantalla(){
return(document.getElementById('pantalla').innerHTML);
}

function limpiar(){
setpantalla(0);
}

function añadir(n){
var resultado=getpantalla();
var c= (parseInt(n)>=0) ? resultado.length : 0;
console.log('ccc222c--->'+c);
if(resultado!='0'){
    c++;
  
        if(c>12){
            console.log('cccc--->'+c);
        //return false;
        }
    
    setpantalla(resultado+n);
    }
else {
    setpantalla(n);
    
}

//c=c+resultado.length;

if(parseInt(n)>=0){
    console.log('--->'+c);
}

}
/*
function calcular(){
var resultado=eval(getpantalla());
setpantalla(resultado);
}*/
function calcular(){

var resultado=getpantalla();

var dividir=(resultado.split(" "));
var n1=parseInt(dividir[0]);
var ope=dividir[1];
var n2=parseInt(dividir[2]);
var respuesta=0;

if(ope=="+"){
    respuesta=n1+n2;
}
else if (ope=="-"){
    respuesta=n1-n2;
}
else if (ope=="*"){
    respuesta=n1*n2;
}
else if (ope=="/"){
    respuesta=n1/n2;
    if(n2==0){
        alert('Error: "No se puede dividir entre 0"');
        respuesta=0;
    }
}
if(String(respuesta)=='NaN' || String(ope)=='undefined'){
    respuesta=(0);
    document.getElementById('mensaje').style.display = 'inline';
    document.getElementById('mensaje').style.backgroundColor = 'red';
    setTimeout(function(){
        document.getElementById('mensaje').style.display = 'none';
    }, 2000);
}
setpantalla(respuesta);
}