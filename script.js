const startScreen = document.getElementById('start-screen');
const mainContent = document.getElementById('main-content');
const video = document.getElementById('bg-video');

startScreen.addEventListener('click', () => {
  startScreen.style.display = 'none';
  mainContent.style.display = 'block';

  video.muted = false;
  video.play().catch(e => console.log("Video play error:", e));
});
