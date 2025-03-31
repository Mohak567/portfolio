function setProgress(value, progressBar) {
    progressBar.style.width = value + '%';
  }
  
  const progressBars = document.querySelectorAll('.progress-bar');
  
  progressBars.forEach(progressBar => {
    const dataValue = progressBar.dataset.value;
    const progressValue = parseInt(dataValue, 10);
    setProgress(progressValue, progressBar);
  });