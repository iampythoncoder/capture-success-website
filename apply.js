(() => {
  const DESTINATION_EMAIL = 'capturesuccessinc@gmail.com';
  const form = document.getElementById('capture-form');
  const modeButtons = Array.from(document.querySelectorAll('.mode-btn'));
  const modePanels = Array.from(document.querySelectorAll('[data-mode-panel]'));
  const submitBtn = document.getElementById('submit-btn');
  const success = document.getElementById('form-success');

  if (!form || modeButtons.length === 0 || modePanels.length === 0 || !submitBtn || !success) {
    return;
  }

  let currentMode = 'join';

  const fieldLabels = {
    fullName: 'Full Name',
    email: 'Email',
    role: 'Role',
    location: 'Location / Timezone',
    linkedin: 'LinkedIn or Portfolio (Optional)',
    joinPool: 'Pool Placement',
    skills: 'Skill Stack',
    weeklyHours: 'Weekly Availability',
    whyJoin: 'Why Join',
    startupName: 'Startup Name',
    deckUrl: 'Website / Deck',
    problem: 'Problem',
    traction: 'Current Traction',
    rolesNeeded: 'Roles Needed',
    equityPool: 'Equity Pool',
    ideaSummary: 'Build Plan',
  };

  const joinFields = [
    'fullName',
    'email',
    'role',
    'location',
    'linkedin',
    'joinPool',
    'skills',
    'weeklyHours',
    'whyJoin',
  ];

  const submitFields = [
    'fullName',
    'email',
    'role',
    'location',
    'linkedin',
    'startupName',
    'deckUrl',
    'problem',
    'traction',
    'rolesNeeded',
    'equityPool',
    'ideaSummary',
  ];

  const buildEmailPayload = (data, mode) => {
    const activeFields = mode === 'submit' ? submitFields : joinFields;
    const lines = [
      `Submission Type: ${mode === 'submit' ? 'Startup Submission' : 'Join Application'}`,
      `Submitted At: ${new Date().toLocaleString()}`,
      '',
    ];

    activeFields.forEach((field) => {
      const value = (data[field] || '').toString().trim();
      if (!value) {
        return;
      }
      lines.push(`${fieldLabels[field]}: ${value}`);
    });

    const subject =
      mode === 'submit'
        ? `Capture Success Startup Submission - ${data.startupName || data.fullName || 'New'}`
        : `Capture Success Join Application - ${data.fullName || 'New'}`;

    const body = lines.join('\n');

    return `mailto:${DESTINATION_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

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

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const payload = Object.fromEntries(new FormData(form).entries());
    payload.mode = currentMode;
    payload.timestamp = new Date().toISOString();

    const mailtoUrl = buildEmailPayload(payload, currentMode);
    window.location.href = mailtoUrl;

    success.textContent =
      currentMode === 'join'
        ? `Email draft opened to ${DESTINATION_EMAIL}. Send it to complete your application.`
        : `Email draft opened to ${DESTINATION_EMAIL}. Send it to complete your startup submission.`;
    success.classList.remove('is-hidden');

    form.reset();
    setMode(currentMode);
  });
})();
