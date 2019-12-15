var race;
var genre;
var nom;
$('.radioA').hide();
$('.radioB').hide();
$('.radioC').hide();
$('#name').hide();
$('#daggerfall').click(function(){
    $('.radioA').show();
    $('.radioB').hide();
    $('.radioC').hide();
});
$('#aldmeri').click(function(){
    $('.radioA').hide();
    $('.radioB').show();
    $('.radioC').hide();
});
$('#coeurébène').click(function(){
    $('.radioA').hide();
    $('.radioB').hide();
    $('.radioC').show();
});
$('#Bréton').click(function(){
    race = "breton";
});
$('#Blanc').click(function(){
    race = "blanc";
});
$('#Nordique').click(function(){
    race = "nordique";
});
$('#Rougeguarde').click(function(){
    race = "rougeguarde";
});
$('#Bois').click(function(){
    race = "bois";
});
$('#Noir').click(function(){
    race = "noir";
});
$('#Orc').click(function(){
    race = "orc";
});
$('#Khajiit').click(function(){
    race = "khajiit";
});
$('#Argonien').click(function(){
    race = "argonien";
});
$('#Male').click(function(){
    genre = "male";
});
$('#Femelle').click(function(){
    genre = "femelle";
});
$('#bouton_création').click(function(){
    if(genre === "male"){
        if(race === "breton"){
            $('#creation').css("background-image",'url("image/race création/bréton male.jpg")');
        }
        if(race === "blanc"){
            $('#creation').css("background-image",'url("image/race création/high elf homme.jpg")');
        }
        if(race === "nordique"){
            $('#creation').css("background-image",'url("image/race création/Nordique male.jpg")');
        }
        if(race === "rougeguarde"){
            $('#creation').css("background-image",'url("image/race création/redguard homme.jpg")');
        }
        if(race === "bois"){
            $('#creation').css("background-image",'url("image/race création/wood elfe homme.jpg")');
        }
        if(race === "noir"){
            $('#creation').css("background-image",'url("image/race création/dark elfe homme.jpg")');
        }
        if(race === "orc"){
            $('#creation').css("background-image",'url("image/race création/orques male.jpg")');
        }
        if(race === "khajiit"){
            $('#creation').css("background-image",'url("image/race création/khajiit Male.jpg")');
        }
        if(race === "argonien"){
            $('#creation').css("background-image",'url("image/race création/argonien male.jpg")');
        }
    }
    if(genre === "femelle"){
        if(race === "breton"){
            $('#creation').css("background-image",'url("image/race création/bréton femme.jpg")');
        }
        if(race === "blanc"){
            $('#creation').css("background-image",'url("image/race création/high elf femme.jpg")');
        }
        if(race === "nordique"){
            $('#creation').css("background-image",'url("image/race création/Nordique Femmelle.jpg")');
        }
        if(race === "rougeguarde"){
            $('#creation').css("background-image",'url("image/race création/redguard femme.jpg")');
        }
        if(race === "bois"){
            $('#creation').css("background-image",'url("image/race création/elfe des bois femme.jpg")');
        }
        if(race === "noir"){
            $('#creation').css("background-image",'url("image/race création/dark elfe femme.jpg")');
        }
        if(race === "orc"){
            $('#creation').css("background-image",'url("image/race création/orques female.jpg")');
        }
        if(race === "khajiit"){
            $('#creation').css("background-image",'url("image/race création/Khajiit Femelle.jpg")');
        }
        if(race === "argonien"){
            $('#creation').css("background-image",'url("image/race création/argonien femelle.jpg")');
        }
    }
    $('#name').show();
    nom = $('#username').val();
    $('#ui_nom').html(nom);
});
$('#envoyer').click(function(){
    $('[data-toggle="popover"]').popover("Formulaire envoyé")
});