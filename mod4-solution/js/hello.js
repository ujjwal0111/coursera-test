(function(window){
	var helloSpeaker={};
	var speakWord="hello";
	helloSpeaker.speak=function(name){
		console.log(speakWord+" "+name);
	}

	window.helloSpeaker=helloSpeaker;

})(window);