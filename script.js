const body = document.body;
  const dial = document.getElementById('dial');
  const labelWork = document.getElementById('label-work');
  const labelWords = document.getElementById('label-words');
  const workView = document.getElementById('work-view');
  const wordsView = document.getElementById('words-view');
  const tagline = document.getElementById('tagline');

  function setMode(mode) {
    body.setAttribute('data-mode', mode);
    dial.setAttribute('aria-checked', mode === 'words');
    labelWork.classList.toggle('active', mode === 'work');
    labelWords.classList.toggle('active', mode === 'words');
    workView.classList.toggle('active', mode === 'work');
    wordsView.classList.toggle('active', mode === 'words');
    tagline.textContent = mode === 'work' ? 'Impact, in the open.' : 'Unrelated to all of that.';
  }

  dial.addEventListener('click', () => {
    setMode(body.getAttribute('data-mode') === 'work' ? 'words' : 'work');
  });
  labelWork.addEventListener('click', () => setMode('work'));
  labelWords.addEventListener('click', () => setMode('words'));

  document.querySelectorAll('.entry-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.entry').classList.toggle('open');
    });
  });
