//This constructor function is creating a playlist song 
function Playlist(name) {
  this.name = name; //sets name for playlist
  this.songs = []; //starts an empty array to store song names
  this.currentSong = null; //null is by deafult but this line tracks the CURRENT playing song
}

Playlist.prototype.addSong = function(songTitle) { //Adds song to the playlist
  this.songs.push(songTitle); //Adds the song to the END of this array; 'this' refers to the specific instance in playlist
};

Playlist.prototype.playFirst = function() { //plays the first song of the playlist
  if (this.songs.length > 0) { 
    this.currentSong = this.songs[0]; //sets current song to first
    console.log("Now playing:", this.currentSong);
  }
};

Playlist.prototype.skipSong = function() { //skips current song and moves to a new one
  if (this.songs.length > 1) { 
    this.songs.shift(); //removes first song
    this.currentSong = this.songs[0]; //sets current song to new first
    console.log("Skipped! Now playing:", this.currentSong);
  } else {
    console.log("No more songs to skip."); //If one or no songs are there, then can't skip. 
  }
};

Playlist.prototype.listSongs = function() { //lists all the songs in the playlist
  console.log("Playlist:", this.name); //playlist name
  console.log("Songs:", this.songs.join(", ")); //join song titles into a single string 
};


let myMix = new Playlist("My Chill Mix");
myMix.addSong("Lofi Study");
myMix.addSong("Chillhop Beats");
myMix.addSong("Evening Jazz");
myMix.playFirst(); //plays lofi
myMix.skipSong(); //plays chillhop
myMix.listSongs(); //plays jazz
