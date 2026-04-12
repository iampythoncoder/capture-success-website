(() => {
  const form = document.getElementById('capture-form');
  const modeButtons = Array.from(document.querySelectorAll('.mode-btn'));
  const modePanels = Array.from(document.querySelectorAll('[data-mode-panel]'));
  const submitBtn = document.getElementById('submit-btn');
  const success = document.getElementById('form-success');

  if (!form || modeButtons.length === 0 || modePanels.length === 0 || !submitBtn || !success) {
    return;
  }

  let currentMode = 'join';

  const setMode = (mode) => {
    currentMode = mode === 'submit' ? 'submit' : 'join';

    modeButtons.forEach((button) => {
      button.classList.toggle('is-active', button.dataset.mode === currentMode);
    });

    modePanels.forEach((panel) => {
      const isActive = panel.dataset.modePanel === currentMode;
      panel.classList.toggle('is-hidden', !isActive);

      panel.querySelectorAll('[required]').forEach((field) => {
        if (isActive) {
          field.setAttribute('required', 'required');
        } else {
          field.removeAttribute('required');
        }
      });
    });

    submitBtn.textContent = currentMode === 'join' ? 'Submit Application' : 'Submit Startup';
    success.classList.add('is-hidden');
    success.textContent = '';
  };

  modeButtons.forEach((button) => {
    button.addEventListener('click', () => setMode(button.dataset.mode || 'join'));
  });

  const params = new URLSearchParams(window.location.search);
  const initialMode = params.get('mode');

  if (initialMode === 'submit') {
    setMode('submit');
  }

  const initialIdea = params.get('idea');
  if (initialIdea) {
    const select = form.querySelector('select[name="joinIdea"]');
    if (select) {
      select.value = initialIdea;
    }
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const payload = Object.fromEntries(new FormData(form).entries());
    payload.mode = currentMode;
    payload.timestamp = new Date().toISOString();

    console.log('Capture Success submission:', payload);

    success.textContent =
      currentMode === 'join'
        ? 'Application received. We will review and reach out with the next step.'
        : 'Startup submission received. We will follow up with a founder onboarding call.';
    success.classList.remove('is-hidden');

    form.reset();
    setMode(currentMode);
  });
})();
