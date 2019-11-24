var click=0;
var id1;
var id2;
var src1;
var src2;

$('#victoire').hide();
$('.img-fluid').click(function(){
    if(click === 0){
        id1 = $(this).attr("id");
        src1 = $(this).attr("src");
        click = 1;
    }
    else if(click === 1){
        id2 = $(this).attr("id");
        src2 = $(this).attr("src");
        $("#" + id1).attr("src",src2);
        $("#" + id2).attr("src",src1);
        click = 0;
        win();
    }
});
$('#boutonTricher').click(function(){
    $('#victoire').show();
    $('.row').hide();
});
function win(){
    if( $("#image1").attr('src') === "images/1.jpg" && $("#image2").attr('src') === "images/2.jpg" && $("#image3").attr('src') === "images/3.jpg" && $("#image4").attr('src') === "images/4.jpg" && $("#image5").attr('src') === "images/5.jpg" && $("#image6").attr('src') === "images/6.jpg" && $("#image7").attr('src') === "images/7.jpg" && $("#image8").attr('src') === "images/8.jpg" && $("#image9").attr('src') === "images/9.jpg"{
        $('#victoire').show();
        $('.row').hide();
    }
}