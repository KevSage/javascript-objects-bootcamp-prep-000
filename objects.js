var playlist = {
  JohnColtrane: "A Love Supreme"
}
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
}
function removeFromPlaylist(artistName) {
  delete playlist.artistName;
}
