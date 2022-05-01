$(function() { 
$(".film").click(function(){    
var film = ["f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "f10"];
var rand = Math.floor(Math.random() * film.length);
$('.' + film[rand]).css("display", "block");
$("#mask").css({
 display: "block",
  
});
$("html").css("backgroudColor", "rgb(0,0,0)")
    
});
    
$("#hide1").button().click(function(){
        $(".f1").hide(),
            $('video').trigger('pause'),
            $("#mask").css("display", "none");
    });    
$("#hide2").button().click(function(){
        $(".f2").hide(),
            $('video').trigger('pause'),
            $("#mask").css("display", "none");
    });    
 $("#hide3").button().click(function(){
        $(".f3").hide(),
            $('video').trigger('pause'),
            $("#mask").css("display", "none");
    });    
$("#hide4").button().click(function(){
        $(".f4").hide(),
            $('video').trigger('pause'),
            $("#mask").css("display", "none");
    });    
$("#hide5").button().click(function(){
        $(".f5").hide(),
            $('video').trigger('pause'),
            $("#mask").css("display", "none");
    });    
$("#hide6").button().click(function(){
        $(".f6").hide(),
            $('video').trigger('pause'),
            $("#mask").css("display", "none");
    });    
$("#hide7").button().click(function(){
        $(".f7").hide(),
            $('video').trigger('pause'),
            $("#mask").css("display", "none");
    });    
$("#hide8").button().click(function(){
        $(".f8").hide(),
            $('video').trigger('pause'),
            $("#mask").css("display", "none");
    });    
$("#hide9").button().click(function(){
        $(".f9").hide(),
            $('video').trigger('pause'),
            $("#mask").css("display", "none");
    });    
$("#hide10").button().click(function(){
        $(".f10").hide(),
            $('video').trigger('pause'),
            $("#mask").css("display", "none");
    });    
                                       
    
});
    