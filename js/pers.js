$(function() {
	
    $('.puaro-1').draggable({
        containment:"main",
        scope:"p-1"
    });
     
    $('.puaro-11').droppable({
        drop: function() {
            
           
            $(".p1").css({
                display: "block",
                zIndex:"1000",
                margin:"50% 25% 0 25%"
            }),
                $("#mask").css({
 display: "block",
  
});
$("html").css("backgroudColor", "rgb(0,0,0)");
        },
        scope:"p-1"
    });
	$("#hide1").button().click(function(){
        $(".p1").hide(),
            $("#mask").css("display", "none");
    });
        
        $('.puaro-2').draggable({
        containment:"main",
        scope:"p-2"
    });
     
    $('.puaro-22').droppable({
        drop: function() {
            
           
            $(".p2").css({
                display: "block",
                zIndex:"1000",
                margin:"80% 25% 0 25%"
            }),
                $("#mask").css({
 display: "block",
  
});
$("html").css("backgroudColor", "rgb(0,0,0)");
        },
        scope:"p-2"
    });
	$("#hide2").button().click(function(){
        $(".p2").hide(),
            $("#mask").css("display", "none");
    });
        
        $('.puaro-3').draggable({
        containment:"main",
        scope:"p-3"
    });
     
    $('.puaro-33').droppable({
        drop: function() {
            
           
            $(".p3").css({
                display: "block",
                zIndex:"1000",
                margin:"130% 25% 0 25%"
            }),
                $("#mask").css({
 display: "block",
  
});
$("html").css("backgroudColor", "rgb(0,0,0)");
        },
        scope:"p-3"
    });
	$("#hide3").button().click(function(){
        $(".p3").hide(),
            $("#mask").css("display", "none");
    });
        
        $('.marpl-1').draggable({
        containment:"main",
        scope:"m-1"
    });
     
    $('.marpl-11').droppable({
        drop: function() {
            
           
            $(".m1").css({
                display: "block",
                zIndex:"1000",
                margin:"160% 25% 0 25%"
            }),
                $("#mask").css({
 display: "block",
  
});
$("html").css("backgroudColor", "rgb(0,0,0)");
        },
        scope:"m-1"
    });
	$("#hide4").button().click(function(){
        $(".m1").hide(),
            $("#mask").css("display", "none");
    });
        
        $('.marpl-2').draggable({
        containment:"main",
        scope:"m-2"
    });
     
    $('.marpl-22').droppable({
        drop: function() {
            
           
            $(".m2").css({
                display: "block",
                zIndex:"1000",
                margin:"180% 25% 0 25%"
            }),
                $("#mask").css({
 display: "block",
  
});
$("html").css("backgroudColor", "rgb(0,0,0)");
        },
        scope:"m-2"
    });
	$("#hide5").button().click(function(){
        $(".m2").hide(),
            $("#mask").css("display", "none");
    });
    
    });