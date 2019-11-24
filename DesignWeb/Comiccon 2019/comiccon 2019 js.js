$('#yoda').hide();
$('#spiderman').hide();
$('#batman').hide();
$('.radio1').hide();
$('.radio2').hide();
$('.radio3').hide();

$('#starwars').click(function(){
    $('#yoda').show();
    $('#spiderman').hide();
    $('#batman').hide();
    $('.radio1').show();
    $('.radio2').hide();
    $('.radio3').hide();
});
$('#Marvel').click(function(){
    $('#yoda').hide();
    $('#spiderman').show();
    $('#batman').hide();
    $('.radio1').hide();
    $('.radio2').show();
    $('.radio3').hide();
});
$('#DC').click(function(){
    $('#yoda').hide();
    $('#spiderman').hide();
    $('#batman').show();
    $('.radio1').hide();
    $('.radio2').hide();
    $('.radio3').show();
});
$('#Yoyodada').click(function(){
    $('#yoda').attr("src","Images/Yoda.png")
});
$('#Luke').click(function(){
    $('#yoda').attr("src","Images/Luke.jpg")
});
$('#Vador').click(function(){
    $('#yoda').attr("src","Images/Darth.jpg")
});
$('#Obi').click(function(){
    $('#yoda').attr("src","Images/Obi wan.jpg")
});
$('#Leia').click(function(){
    $('#yoda').attr("src","Images/leia.jfif")
});
$('#Spider').click(function(){
    $('#spiderman').attr("src","Images/spiderman.jpg")
});
$('#Thor').click(function(){
    $('#spiderman').attr("src","Images/thor.jpg")
});
$('#Hulk').click(function(){
    $('#spiderman').attr("src","Images/hulk.jpg")
});
$('#Captain').click(function(){
    $('#spiderman').attr("src","Images/captain.jpg")
});
$('#Black').click(function(){
    $('#spiderman').attr("src","Images/black widow.jpg")
});
$('#Bat').click(function(){
    $('#batman').attr("src","Images/batman.jpg")
});
$('#Superman').click(function(){
    $('#batman').attr("src","Images/superman.jpg")
});
$('#Green').click(function(){
    $('#batman').attr("src","Images/green.jpg")
});
$('#Wonder').click(function(){
    $('#batman').attr("src","Images/Wonder Woman.jpg")
});
$('#Flash').click(function(){
    $('#batman').attr("src","Images/Flash.jpg")
});




var nom = $("#Mot").val({
    nom[0];

});