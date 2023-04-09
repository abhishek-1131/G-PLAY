// Define variables
const playlistList = document.getElementById('playlist-list');
const newPlaylistForm = document.getElementById('new-playlist-form');
const songList = document.getElementById('song-list');
const newSongForm = document.getElementById('new-song-form');
const recommendButton = document.getElementById('recommend-button');
const recommendationList = document.getElementById('recommendation-list');
let currentPlaylist = null;
let playlists = [];

// Define functions
function renderPlaylists() {
  playlistList.innerHTML = '';
  playlists.forEach((playlist) => {
    const li = document.createElement('li');
    li.textContent = playlist.name;
    li.addEventListener('click', () => {
      currentPlaylist = playlist;
      renderSongs();
    });
    playlistList.appendChild(li);
  });
}

function renderSongs() {
  if (currentPlaylist) {
    songList.innerHTML = '';
    document.getElementById('playlist-title').textContent = currentPlaylist.name;
    currentPlaylist.songs.forEach((song) => {
      const li = document.createElement('li');
      li.textContent = song;
      songList.appendChild(li);
    });
  }
}

async function recommendSongs() {
  if (currentPlaylist && currentPlaylist.songs.length >= 3) {
    const response = await fetch(`https://recommendation-api.com/recommend?playlist=${currentPlaylist.name}`);
    const data = await response.json();
    recommendationList.innerHTML = '';
    data.forEach((song) => {
      const li = document.createElement('li');
      li.textContent = song;
      recommendationList.appendChild(li);
    });
  }
}

// Add event listeners
// newPlaylistForm.addEventListener('submit', (event) => {
//   event.preventDefault(); 
// }