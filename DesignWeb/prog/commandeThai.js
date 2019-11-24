var nombre=1;
var ligne;
var colonne;
var x="  .";

for(ligne=1;ligne<=5;ligne++){
    for(var i=1;i<=ligne;i++){
        document.write(x);
    }
    for(colonne=1;colonne<=4;colonne++){
        document.write(nombre +" ");
        nombre = nombre+=1;
    }
    document.write("<br>");
    nombre = nombre-=1;
    nombre = nombre*=2;
}