;(function($){
	"use strict";

	var $document = $(document);

	//禁止窗口的默认滑动
	document.ontouchmove = function(e){
	    e.preventDefault();
	};

	//Loader
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

	//框架
	var runPage,
	    interval,
	    autoPlay;

	autoPlay = function(to) {

	    clearTimeout(interval);
	    interval = setTimeout(function() {
	        runPage.go(to);
	    }, 5000);

	}

	runPage = new FullPage({

	    id : 'pageContain',                            // id of contain
	    slideTime : 600,                               // time of slide
	    continuous : false,                             // create an infinite feel with no endpoints
	    effect : {                                     // slide effect
	        transform : {
	            translate : 'Y',                       // 'X'|'Y'|'XY'|'none'
	            scale : [1, 1],                       // [scalefrom, scaleto]
	            rotate : [0, 0]                       // [rotatefrom, rotateto]
	        },
	        opacity : [0, 1]                           // [opacityfrom, opacityto]
	    },                           
	    mode : 'wheel,touch',               // mode of fullpage
	    easing : 'ease',                                // easing('ease','ease-in','ease-in-out' or use cubic-bezier like [.33, 1.81, 1, 1] )
	    // callback : function(index, thisPage) {

	    //     index = index + 1 > 3 ? 0 : index + 1;
	    //     autoPlay(index);
	    // }
	});

	// interval = setTimeout(function() {
	//     runPage.go(runPage.thisPage() + 1);
	// }, 5000);

	$(".page1").find("h2").on("tap",function(){
		alert(1)
	})

})(Zepto);