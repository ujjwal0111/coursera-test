(function () {
	var names=["yaadov","John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
	for(var name in names) {
		var firstLetter= names[name].charAt(0).toLowerCase();
		if(firstLetter=='j'){
			byeSpeaker.speak(names[name]);
		}
		else if(firstLetter=='J'){
			byeSpeaker.speak(names[name]);
		}
	else {
		helloSpeaker.speak(names[name]);
	}	

	}
	// body...
}) ();
