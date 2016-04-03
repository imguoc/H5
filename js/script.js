 document.addEventListener('touchmove', function(event) {
    event.preventDefault();
}
, false);

document.onreadystatechange = subSomething;
function subSomething(){ 
    if(document.readyState === "complete"){
        //code
    } 
};

$(window).load(function() {
    $("#loader .loader-inner").fadeOut('slow',function(){
        $("#loader").fadeOut('slow');
    });
});

$document.on('tap',"#audio",function(){
    var audio = $(this).find("audio")[0];
    $(this).toggleClass("rotate");
    if(!$(this).is(".rotate")){
        audio.pause();
    } else {
        audio.play();	
    };
});

