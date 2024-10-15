document.addEventListener('DOMContentLoaded', () => {
    const songList = document.querySelector('.playlist');
    const searchBar = document.querySelector('.search-bar');
    const addButton = document.getElementById('add-song-button'); 
    const newTitleInput = document.getElementById('new-title');
    const newArtistInput = document.getElementById('new-artist');

    const addSong = () => {
        const songTitle = newTitleInput.value.trim();
        const artistName = newArtistInput.value.trim();
        
        if (songTitle && artistName) {
            const songDiv = document.createElement('div');
            songDiv.classList.add('song');

            songDiv.innerHTML = `
                <div>
                    <span class="song-title">${songTitle}</span>
                    <span class="artist-name">${artistName}</span>
                </div>
                <button class="delete-button">Delete</button>
            `;

            songList.appendChild(songDiv);
            newTitleInput.value = '';
            newArtistInput.value = '';

            songDiv.querySelector('.delete-button').addEventListener('click', deleteSong);
        }
    };

    const deleteSong = (event) => {
        const songDiv = event.target.closest('.song');
        if (songDiv) {
            songList.removeChild(songDiv);
        }
    };

    const filterSongs = () => {
        const filterText = searchBar.value.toLowerCase();
        const songs = songList.querySelectorAll('.song');

        songs.forEach(song => {
            const title = song.querySelector('.song-title').textContent.toLowerCase();
            const artist = song.querySelector('.artist-name').textContent.toLowerCase();
            song.style.display = (title.includes(filterText) || artist.includes(filterText)) ? 'block' : 'none';
        });
    };

    addButton.addEventListener('click', addSong);
    searchBar.addEventListener('input', filterSongs);
});

var btns = document.querySelectorAll('.delete');

Array.from(btns).forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        // Get the parent div of the button, which is the song div
        const songDiv = e.target.closest('.song');
        if (songDiv) {
            songDiv.parentNode.removeChild(songDiv);
        }
    });
});



