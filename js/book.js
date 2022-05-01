$(function() {
	$('.show1').click(function(){
        $('.b1').css('display', 'block');
        $("#mask").css({
 display: "block",
  
});
$("html").css("backgroudColor", "rgb(0,0,0)");
    });
    
	$("#hide5").button().click(function(){
        $(".b1").hide(),
            $("#mask").css("display", "none");
    });
    
    $('.show2').click(function(){
        $('.b2').css('display', 'block'),
        $("#mask").css({
 display: "block"
});
$("html").css("backgroudColor", "rgb(0,0,0)");
    });
    
	$("#hide1").button().click(function(){
        $(".b2").hide(),
            $("#mask").css("display", "none");
    });
    
    $('.show3').click(function(){
        $('.b3').css('display', 'block');
        $("#mask").css({
 display: "block",
  
});
$("html").css("backgroudColor", "rgb(0,0,0)")
    });
    
	$("#hide2").button().click(function(){
        $(".b3").hide(),
            $("#mask").css("display", "none");
    });
    
    $('.show4').click(function(){
        $('.b4').css('display', 'block');
        $("#mask").css({
 display: "block",
  
});
$("html").css("backgroudColor", "rgb(0,0,0)")
    });
    
	$("#hide3").button().click(function(){
        $(".b4").hide(),
            $("#mask").css("display", "none");
    });
    
    $('.show5').click(function(){
        $('.b5').css('display', 'block');
        $("#mask").css({
 display: "block",
  
});
$("html").css("backgroudColor", "rgb(0,0,0)")
    });
    
	$("#hide4").button().click(function(){
        $(".b5").hide(),
            $("#mask").css("display", "none");
    });
    
     $('.show6').click(function(){
        $('.b6').css('display', 'block');
         $("#mask").css({
 display: "block",
  
});
$("html").css("backgroudColor", "rgb(0,0,0)")
    });
    
	$("#hide").button().click(function(){
        $(".b6").hide(),
            $("#mask").css("display", "none");
    });
        
});