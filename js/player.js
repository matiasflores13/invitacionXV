const audio = document.getElementById('audio');
const btnPlay = document.getElementById('btn-play');
const barraFill = document.getElementById('barra-fill');

btnPlay.addEventListener('click', () => {
  if (audio.paused) {
    audio.play().then(() => {
      btnPlay.innerHTML = '&#9646;&#9646;';
    }).catch((err) => {
      console.error('Error al reproducir:', err);
    });
  } else {
    audio.pause();
    btnPlay.innerHTML = '&#9654;';
  }
});

document.getElementById('btn-retroceder').addEventListener('click', () => {
  audio.currentTime = Math.max(0, audio.currentTime - 10);
});

document.getElementById('btn-adelantar').addEventListener('click', () => {
  audio.currentTime = Math.min(audio.duration || 0, audio.currentTime + 10);
});

audio.addEventListener('timeupdate', () => {
  if (audio.duration) {
    const progreso = (audio.currentTime / audio.duration) * 100;
    barraFill.style.width = progreso + '%';
  }
});

audio.addEventListener('ended', () => {
  btnPlay.innerHTML = '⏸';
  barraFill.style.width = '0%';
});