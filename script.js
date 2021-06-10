var songs = [{HTMLid: 'good 4 u  By Olivia Rodrigo'},{HTMLid: 'Promiscuous  By Nelly Furtado'}, {HTMLid: 'Pretty Boy Swag  By Soulja Boy'}, {HTMLid: 'Jukebox  By Kid Quill'}, {HTMLid: 'Deja Vu  By Post Malone'}];
function renderSong(){
    let songContainer = document.getElementById("Song");
    let index = randomize();
    console.log(index)
    let song = songs[index].HTMLid;
    songContainer.textContent = song;
}
function randomize() {
  return Math.floor(Math.random() * (songs.length - 1));
}
function startApp(){
  let button = document.getElementById('button');
  button.addEventListener('click', renderSong);
}
startApp();