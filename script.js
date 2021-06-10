var songs = [{HTMLid: 'good 4 u  By Olivia Rodrigo'},{HTMLid: 'Promiscuous  By Nelly Furtado'}, {HTMLid: 'Pretty Boy Swag  By Soulja Boy'}, {HTMLid: 'Jukebox  By Kid Quill'}, {HTMLid: 'Deja Vu  By Post Malone'}];

function renderSong(){
for (let i=0; i <= 4; i++){
let songContainer = document.getElementById("Song");
let div = document.createElement("div");
songContainer.appendChild(div);
div.setAttribute('id', songs[i].HTMLid);
songContainer.addEventListener('click', startApp);
}}

function startApp(){
  renderSong();
}
startApp();