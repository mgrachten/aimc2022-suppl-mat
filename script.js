var area_audios = [];
function init_audio() {

	for (area of document.getElementsByTagName("area")) {
		// set audio play/pause on area
		if ( area.alt ) {
			let href = area.alt;
			let audio = create_audio(href);
			area.onclick = function(event) {
				if ( audio.paused ) {
					audio.play();
				} else {
					audio.pause();
				}

			}
		}
	}


	// upon play of one audio element stop others
	for (audio of document.getElementsByTagName("audio")) {
		audio.addEventListener("play", function(event) {
			for (other of document.getElementsByTagName("audio")) {
				if ( this != other ) {
					other.pause();
					other.currentTime = 0;
				} 
			}
		});
	}


}

function create_audio(src) {
	var sound      = document.createElement('audio');
	sound.src      = src;
	sound.type     = 'audio/mpeg';
	document.getElementById('area_audios').appendChild(sound);
	return sound
}

function debug_area() {
	// usage instructions:
	// 1. put id="debugimg" on image
	// 2. add <span id="coords">x<br>y</span> somewhere visible
	// 3. run this function on DOMContentLoaded
	var img = document.getElementById('debugimg');
	var coords = document.getElementById('coords');
	img.addEventListener('mousemove', function(event){
		coords.innerHTML = "x: " + event.offsetX + "<br/>y: " + event.offsetY;
	});	
}
window.addEventListener('DOMContentLoaded', (event) => {
    init_audio();
	// debug_area();

	// make image maps work with responsive design
	// $('img[usemap]').rwdImageMaps();

});
