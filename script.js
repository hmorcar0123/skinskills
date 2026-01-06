let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.forEach(function (tooltipTriggerEl) {
    new bootstrap.Tooltip(tooltipTriggerEl);
  });

  let popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
  popoverTriggerList.forEach(function (popoverTriggerEl) {
    new bootstrap.Popover(popoverTriggerEl);
  });


  const video=document.getElementById('tutorialVideo');
  const btnPlay=document.getElementById('btnPlay');
  const btnPause=document.getElementById('btnPause');
  const btnStop=document.getElementById('btnStop');
  const btnVolUp=document.getElementById('btnVolUp');
  const btnVolDown=document.getElementById('btnVolDown');

  btnPlay.addEventListener('click',  () => video.play());
  btnPause.addEventListener('click', () => video.pause());

  btnStop.addEventListener('click', () => {
    video.pause();
    video.currentTime = 0;
  });

  btnVolUp.addEventListener('click', () => {
    video.volume = Math.min(video.volume + 0.1, 1);
  });

  btnVolDown.addEventListener('click', () => {
    video.volume = Math.max(video.volume - 0.1, 0);
  });

  // Opcional: parar el vídeo al cerrar el modal
  const modalEl = document.getElementById('videoTutorialModal');
  modalEl.addEventListener('hidden.bs.modal', () => {
    video.pause();
    video.currentTime = 0;
  });

