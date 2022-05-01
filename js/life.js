$(function() {
	
    $('.aa').draggable({
        containment:"main",
        scope:"prop"
    });
     
    $('.ab').droppable({
        drop: function() {
            
           
            $(".Prop").css({
                display: "block",
                zIndex:"1000",
                margin:"120% 25% 0 25%"
            }),
                $("#mask").css({
 display: "block",
  
});
$("html").css("backgroudColor", "rgb(0,0,0)");
        },
        scope:"prop"
    });
	$("#hide").button().click(function(){
        $(".Prop").hide(),
            $("#mask").css("display", "none");
    });
    
    
    $('.bc').draggable({
        containment:"main",
        scope:"puaro"
    });
     
    $('.bb').droppable({
        drop: function() {
            
           
            $(".puaro").css({
                display: "block",
                zIndex:"1000",
                margin:"100% 25% 0 25%"
            }),
                $("#mask").css({
 display: "block",
  
});
$("html").css("backgroudColor", "rgb(0,0,0)");
        },
        scope:"puaro"
    });
	$("#hide1").button().click(function(){
        $(".puaro").hide(),
            $("#mask").css("display", "none");
    });
    
     $('.cc').draggable({
        containment:"main",
        scope:"death"
    });
     
    $('.cd').droppable({
        drop: function() {
            
           
            $(".death").css({
                display: "block",
                zIndex:"1000",
                margin:"150% 25% 0 25%"
            }),
                $("#mask").css({
 display: "block",
  
});
$("html").css("backgroudColor", "rgb(0,0,0)");
        },
        scope:"death"
    });
	$("#hide2").button().click(function(){
        $(".death").hide(),
            $("#mask").css("display", "none");
    });
    
    $('.de').draggable({
        containment:"main",
        scope:"hus"
    });
     
    $('.dd').droppable({
        drop: function() {
            
           
            $(".husband1").css({
                display: "block",
                zIndex:"1000",
                margin:"70% 25% 0 25%"
            }),
                $("#mask").css({
 display: "block",
  
});
$("html").css("backgroudColor", "rgb(0,0,0)");
                
        },
        scope:"hus"
    });
    $('.df').droppable({
        drop: function() {
            
           
            $(".husband2").css({
                display: "block",
                zIndex:"1000",
                margin:"70% 25% 0 25%"
            }),
                $("#mask").css({
 display: "block",
  
});
$("html").css("backgroudColor", "rgb(0,0,0)");
        },
        scope:"hus"
    });
	$("#hide3").button().click(function(){
        $(".husband1").hide(),
            $("#mask").css("display", "none");
    });
    $("#hide4").button().click(function(){
        $(".husband2").hide(),
            $("#mask").css("display", "none");
    });
    
    
         $('.r').draggable({
        containment:"main",
             stop:function(){
               $('.t').css("animation", "t1 10s infinite"); 
             },
                       scope:"d"  

    });
     
    $('.o').droppable({
        deactivate: function() {
             setTimeout( function(){
            $(".childhood").css({
                display: "block",
                zIndex:"1000",
                margin:"40% 25% 0 25%"
            }),
$("#mask").css("display", "block"),
$("html").css("backgroudColor", "rgb(0,0,0)")},7000)     
        },
        scope:"d"
    });
	$("#hide5").button().click(function(){
        $(".childhood").hide(),
            $("#mask").css("display", "none");
    });
        
});