Fibonacci;
function Fibonacci(){
    var tab = [];
    tab[0] = 1;
    tab[1] = 1;
    for(var i=2; i<=100; i++){
        tab[i] = tab[i-1] + tab[i-2];
        document.write(tab);
    }
    for(var j=0; j<=100;j++){
        document.write(tab[j]+" ");
        if (j%20==0);
    }
    document.write("<br>");
}