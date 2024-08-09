var musicPlayer = (function() {
    var currentTrack = 'No track playing';                                 
    var isPlaying = false;

    function playTrack(track) {
        currentTrack = track;
        isPlaying = true;
        console.log('Playing: ' + currentTrack);
    }
    function pauseTrack() {
        if (isPlaying) {
            
            console.log('Paused: ' + currentTrack);
        }
    }

    function stopTrack() {
       
        if (isPlaying) {
            isPlaying = false;
            console.log('Stopped: ' + currentTrack);
            currentTrack = 'No track playing';
        }
    }
   
    return {
        play: playTrack,
        stop: stopTrack,
        pause: pauseTrack,
       
    };
})();
//Testing
musicPlayer.play('Song 1'); // Playing: Song 1
musicPlayer.pause();        // Paused: Song 1
        
musicPlayer.stop(); // Stopped: Song 1

