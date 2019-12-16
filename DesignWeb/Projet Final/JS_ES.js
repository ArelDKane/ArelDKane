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
            $('#creation').css("background-image",'url("image/race_création/bréton_male.jpg")');
        }
        if(race === "blanc"){
            $('#creation').css("background-image",'url("image/race_création/high_elf_homme.jpg")');
        }
        if(race === "nordique"){
            $('#creation').css("background-image",'url("image/race_création/Nordique_male.jpg")');
        }
        if(race === "rougeguarde"){
            $('#creation').css("background-image",'url("image/race_création/redguard_homme.jpg")');
        }
        if(race === "bois"){
            $('#creation').css("background-image",'url("image/race_création/wood_elfe_homme.jpg")');
        }
        if(race === "noir"){
            $('#creation').css("background-image",'url("image/race_création/dark_elfe_homme.jpg")');
        }
        if(race === "orc"){
            $('#creation').css("background-image",'url("image/race_création/orques_male.jpg")');
        }
        if(race === "khajiit"){
            $('#creation').css("background-image",'url("image/race_création/khajiit_Male.jpg")');
        }
        if(race === "argonien"){
            $('#creation').css("background-image",'url("image/race_création/argonien_male.jpg")');
        }
    }
    if(genre === "femelle"){
        if(race === "breton"){
            $('#creation').css("background-image",'url("image/race_création/bréton_femme.jpg")');
        }
        if(race === "blanc"){
            $('#creation').css("background-image",'url("image/race_création/high_elf_femme.jpg")');
        }
        if(race === "nordique"){
            $('#creation').css("background-image",'url("image/race_création/Nordique_Femmelle.jpg")');
        }
        if(race === "rougeguarde"){
            $('#creation').css("background-image",'url("image/race_création/redguard_femme.jpg")');
        }
        if(race === "bois"){
            $('#creation').css("background-image",'url("image/race_création/elfe_des_bois_femme.jpg")');
        }
        if(race === "noir"){
            $('#creation').css("background-image",'url("image/race_création/dark_elfe_femme.jpg")');
        }
        if(race === "orc"){
            $('#creation').css("background-image",'url("image/race_création/orques_female.jpg")');
        }
        if(race === "khajiit"){
            $('#creation').css("background-image",'url("image/race_création/Khajiit_Femelle.jpg")');
        }
        if(race === "argonien"){
            $('#creation').css("background-image",'url("image/race_création/argonien_femelle.jpg")');
        }
    }
    $('#name').show();
    nom = $('#username').val();
    $('#ui_nom').html(nom);
});
$('#envoyer').click(function(){
    $('[data-toggle="popover"]').popover("Formulaire envoyé")
});