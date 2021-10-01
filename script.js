var a = prompt("Ingrese un número: ");
var b = prompt("Ingrese otro número:");

n1 = a;
n2 = b;

document.write("<div class='general'><h3 class='numeros'>Números: " + a + " " + b + "</h3> <div class='tabla'>");

while (n1 > 0 && n2 > 0){
    var mayor = Math.max(n1, n2);
    var menor = Math.min(n1, n2); 

    var  division = (mayor/menor);
    var entero = Math.round(division - 0.5);

    var residuo = mayor - (menor * entero);
    
    document.write("<label> " + residuo + " = " + mayor + "(1) - " + menor + "(" + entero + ")</label>"); 

    var n1 = menor;
    var n2 = residuo;
}

var mcm = ((a * b)/menor);

document.write("</div> <label class='resultado'>El maximo común divisor es: " + menor + "</label>");
document.write("<label class='resultado'>El maximo común multiplo es: " + mcm + "</label></div>");

