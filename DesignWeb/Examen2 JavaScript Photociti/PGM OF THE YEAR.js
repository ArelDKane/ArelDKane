$("#Blanc").click(function(){
    $(".bg1").css("background-image",'url("background/blanc.jpg")');
});
$("#Bleu").click(function(){
    $(".bg1").css("background-image",'url("background/bleu.jpg")');
});
$("#BleuFoncee").click(function(){
    $(".bg1").css("background-image",'url("background/bleuFonce.jpg")');
});
$("#Gris").click(function(){
    $(".bg1").css("background-image",'url("background/gris.jpg")');
});
$("#Noir").click(function(){
    $(".bg1").css("background-image",'url("background/noir.jpg")');
});
$("#Rose").click(function(){
    $(".bg1").css("background-image",'url("background/rose.jpg")');
});
$("#Rouge").click(function(){
    $(".bg1").css("background-image",'url("background/rouge.jpg")');
});
$('#wrong').hide();
$('#valide').hide();
$("#Go").click(function(){
    var nom = $("#Mot").val();
    var taille = nom.length;
    nom.toUpperCase();
    if(taille>=3){
        if (taille <= 12){
            $("#Mots").hide();
            $("#valide").show();
            $("#wrong").hide();
        }
        else{
            $("#Mots").hide();
            $("#valide").hide();
            $("#wrong").show();
        }
    }
    else{
        $("#Mots").hide();
        $("#valide").hide();
        $("#wrong").show();
    }
    var a = taille;
    for(var i = 0;i <= 12; i++){
        if(a >= 1){
            $("#lettre" +(i+1)).removeClass("hide");
            a -= 1;
        }
        if(nom[i] === "*"){
            $("#lettre" +(i+1)).attr("src","Letters/CS/CS1.jpg");
        }
        else{
            $("#lettre" +(i+1)).attr("src","Letters/"+nom[i]+"/"+nom[i]+"1.jpg");
        }
    }
    $(".hide").hide();
    for(var e = 1; e <= 12; e ++){
        $("#col" +e).removeClass("col-1 col-2 col-3 col-4");
        if(taille === 3){
            $("#col" +e).addClass("col-4 img-fluid");
            $(".letter").css("height", "310px");
        }
        else{
            if(taille === 4){
                $("#col" +e).addClass("col-3 img-fluid");
                $(".letter").css("height", "275px");
            }
            else{
                if(taille === 5){
                    $("#col" +e).addClass("col-2 img-fluid");
                    $(".letter").css("height", "250px");
                }
                else{
                    if(taille === 6){
                        $("#col" +e).addClass("col-2 img-fluid");
                        $(".letter").css("height", "230px");
                    }
                    else{
                        if(taille >= 7){
                            $("#col" +e).addClass("col-1 img-fluid");
                            $(".letter").css("height", "200px");
                        }
                    }
                }
            }
        }
    }
});