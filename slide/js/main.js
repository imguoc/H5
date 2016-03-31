;(function($){
	"use strict";

	$(window).load(function() {
        $("#loader").fadeOut("slow");
    });

    document.onreadystatechange = subSomething;
    function subSomething(){ 
        if(document.readyState === "complete"){
            //$("#page1").find('h2').addClass("delay_1 fadeInRight animated");
        } 
    };
    
	var $document = $(document),
		$wrapper = $("#slip"),
		$pages = $('.swipe-box');

	var slip = Slip($wrapper[0], "y").webapp($pages);

	slip
		.start(function(){
			console.log("滑动开始！")
		})
		.move(function(){
			console.log("正在滑动！")
		})
		.end(function(){
			console.log("滑动结束！")
			var _index = this.page;
			console.log(_index);
		});

	$document.on('tap',"#pageAudio",function(){
		var audio = $(this).find("audio")[0];
		$(this).toggleClass("rotate");
		if(!$(this).is(".rotate")){
			audio.pause();
		} else {
			audio.play();	
		};
	});


})(Zepto);