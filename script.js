const songName = document.getElementById('song-name');
const bandName = document.getElementById('band-name');
const song = document.getElementById("audio");
const cover = document.getElementById("cover");
const play = document.getElementById("play");
const next = document.getElementById("next");
const previous = document.getElementById("previous");

const Musica1 = {
  songName: '',
  file: '',
  artist: ''
};

const Musica2 = {
  songName: '',
  file: '',
  artist: ''
};

const playlist = [Musica1, Musica2];
let index = 0;
let isPlaying = false;

function initSong() {
  const currentSong = playlist[index];
  cover.src = `/imagens/${currentSong.file}.jpg`;
  songName.innerText = currentSong.songName;
  bandName.innerText = currentSong.artist;
  song.src = `/songs/${currentSong.file}.mp3`;
}

function playSong() {
  play.querySelector(".bi").classList.remove("bi-play-circle-fill");
  play.querySelector(".bi").classList.add("bi-pause-circle-fill");
  song.play();
  isPlaying = true;
}

function pauseSong() {
  play.querySelector(".bi").classList.add("bi-play-circle-fill");
  play.querySelector(".bi").classList.remove("bi-pause-circle-fill");
  song.pause();
  isPlaying = false;
}

function playPauseDecider() {
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
}

function previousSong() {
  if (index === 0) {
    index = playlist.length - 1;
  } else {
    index -= 1;
  }
  initSong();
  playSong();
}

function nextSong() {
  if (index === playlist.length - 1) {
    index = 0;
  } else {
    index += 1;
  }
  initSong();
  playSong();
}

// Event Listeners
play.addEventListener('click', playPauseDecider);
previous.addEventListener('click', previousSong);
next.addEventListener('click', nextSong);

// Initialize
initSong();
