var multi;
var reponse;
var nombre;

for(nombre=10;nombre<=15;nombre++){
    document.write("table de multiplication du nombre " +nombre+ "<br>");
    for(multi=1;multi<=12;multi++){
        reponse= multi*nombre;
        document.write(multi+"*"+nombre+"="+reponse);
        document.write("<br>");
    }
    document.write("<br>")
}
