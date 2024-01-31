console.log("Welcome To Spotify");

//Initialize the variables

let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('masterPlay');
let gif = document.getElementById('gif');

let songs = [
    {songName: "Shape Of You" , filePath: "song/1.mp3 " , coverPath: " cover/1.mp3"}
]

// audioElement.play();
// Handle play/pause click

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-paly-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;

    }
})
//Listen to Events

audioElement.addEventListener('timeupdate' ,()=>{
    console.log('timeupdate');

    // Update Seekbar

    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
} )

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})