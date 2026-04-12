(() => {
  const scenes = [
    {
      step: '01',
      label: 'Signal Layer',
      title: 'Screen opportunities by execution clarity',
      text: 'Founders are reviewed for responsiveness, milestone quality, and scope precision before listings go live.',
      modules: [
        ['Quality Gate', 'Rejects vague or non-executable role requests.'],
        ['Scope Matrix', 'Maps every listing to specific startup lanes.'],
        ['Founder SLA', 'Tracks response speed before publishing.'],
        ['Readiness Flag', 'Only publishes teams ready to operate now.'],
      ],
      panel: {
        tag: 'Signal Layer',
        title: 'Only serious startup opportunities are surfaced.',
        text: 'Students see opportunities that are scoped for execution and anchored to real founder demand.',
        metrics: [
          ['Signal Score', '92', '92%'],
          ['Scope Clarity', '88', '88%'],
          ['Founder Responsiveness', '81', '81%'],
        ],
      },
    },
    {
      step: '02',
      label: 'Matching',
      title: 'Match builders to startups by velocity, not resume fluff',
      text: 'Matching weights execution history, communication rhythm, and lane fit across product, growth, and ops.',
      modules: [
        ['Capability Graph', 'Links builders to tasks they can deliver quickly.'],
        ['Rhythm Fit', 'Aligns by timezone and operating cadence.'],
        ['Risk Check', 'Flags mismatch before onboarding.'],
        ['Fast Intro', 'Qualified candidates are routed in hours.'],
      ],
      panel: {
        tag: 'Matching Engine',
        title: 'Placement focuses on immediate contribution.',
        text: 'Teams receive contributors who can enter active sprint cycles with minimal ramp-up.',
        metrics: [
          ['Placement Window', '36h', '74%'],
          ['Fit Confidence', '89', '89%'],
          ['Onboarding Delay', 'Low', '64%'],
        ],
      },
    },
    {
      step: '03',
      label: 'Execution',
      title: 'Run weekly sprints with transparent ownership',
      text: 'Every contributor is attached to specific outcomes, owners, and deadlines inside a visible execution board.',
      modules: [
        ['Sprint Board', 'Defines sprint commitments and owners.'],
        ['Outcome Feed', 'Tracks delivered outputs and blockers.'],
        ['Decision Log', 'Captures priority changes and tradeoffs.'],
        ['Quality Review', 'Closes each sprint with measurable results.'],
      ],
      panel: {
        tag: 'Execution Surface',
        title: 'Progress is measured in shipped work.',
        text: 'Work is structured for operating conditions, not simulation. The baseline is delivery.',
        metrics: [
          ['Sprint Cadence', 'Weekly', '83%'],
          ['Milestone Hit Rate', '87', '87%'],
          ['Decision Velocity', 'Fast', '72%'],
        ],
      },
    },
    {
      step: '04',
      label: 'Founder Support',
      title: 'Founders get a team layer, not random applicants',
      text: 'Capture Success helps founders build focused contributor pods around immediate execution priorities.',
      modules: [
        ['Pod Builder', 'Creates role-balanced working groups.'],
        ['Ops Rhythm', 'Maintains weekly execution cadence.'],
        ['Support Loop', 'Surfaces risk and unblocks bottlenecks.'],
        ['Scale Readiness', 'Prepares teams for growth milestones.'],
      ],
      panel: {
        tag: 'Founder Layer',
        title: 'Teams scale with aligned contributors.',
        text: 'Founders exchange equity for focused execution support instead of bloating fixed overhead.',
        metrics: [
          ['Pod Formation', 'Rapid', '79%'],
          ['Execution Lift', '+', '86%'],
          ['Overhead Pressure', 'Lower', '68%'],
        ],
      },
    },
    {
      step: '05',
      label: 'Ownership',
      title: 'Tie contribution to long-term upside',
      text: 'Contribution records roll into equity alignment conversations so ownership maps to meaningful execution.',
      modules: [
        ['Contribution Ledger', 'Tracks outcomes by owner and sprint.'],
        ['Equity Mapping', 'Aligns upside with delivered value.'],
        ['Review Cadence', 'Scheduled checkpoints with founders.'],
        ['Continuity Layer', 'Rewards sustained operating impact.'],
      ],
      panel: {
        tag: 'Ownership Model',
        title: 'Execution converts to real participation.',
        text: 'Students build proof and upside. Founders build teams aligned to long-term growth.',
        metrics: [
          ['Equity Alignment', 'Direct', '88%'],
          ['Contribution Traceability', 'High', '91%'],
          ['Long-term Participation', 'Strong', '77%'],
        ],
      },
    },
  ];

  const track = document.getElementById('scene-track');
  const panelTag = document.getElementById('panel-tag');
  const panelTitle = document.getElementById('panel-title');
  const panelText = document.getElementById('panel-text');
  const bars = document.getElementById('panel-bars');
  const scrollySection = document.getElementById('scrollytelling');
  const root = document.documentElement;

  if (!track || !panelTag || !panelTitle || !panelText || !bars || !scrollySection) {
    return;
  }

  track.innerHTML = scenes
    .map((scene, index) => {
      const modules = scene.modules
        .map(
          ([title, text]) =>
            `<article><h4>${title}</h4><p>${text}</p></article>`
        )
        .join('');

      return `
        <article class="scene-step" data-scene-index="${index}" data-reveal>
          <div class="scene-head">
            <p>Step ${scene.step}</p>
            <span>${scene.label}</span>
          </div>
          <h3>${scene.title}</h3>
          <p>${scene.text}</p>
          <div class="scene-modules">${modules}</div>
        </article>
      `;
    })
    .join('');

  const dynamicRevealTargets = Array.from(track.querySelectorAll('[data-reveal]'));
  if (dynamicRevealTargets.length > 0) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.14,
        rootMargin: '0px 0px -10% 0px',
      }
    );

    dynamicRevealTargets.forEach((target, index) => {
      target.style.setProperty('--reveal-delay', `${Math.min(index * 42, 240)}ms`);
      revealObserver.observe(target);
    });
  }

  let activeIndex = 0;

  const renderPanel = (index) => {
    const scene = scenes[index] || scenes[0];
    activeIndex = index;

    panelTag.textContent = scene.panel.tag;
    panelTitle.textContent = scene.panel.title;
    panelText.textContent = scene.panel.text;

    bars.innerHTML = scene.panel.metrics
      .map(
        ([label, value, width]) => `
          <article>
            <span>${label}</span>
            <strong>${value}</strong>
            <i style="--bar-width: ${width};"></i>
          </article>
        `
      )
      .join('');

    document.querySelectorAll('.scene-step').forEach((step, idx) => {
      step.classList.toggle('is-active', idx === index);
    });
  };

  renderPanel(0);

  const sceneObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idx = Number(entry.target.dataset.sceneIndex || 0);
          if (idx !== activeIndex) {
            renderPanel(idx);
          }
        }
      });
    },
    {
      threshold: 0.5,
      rootMargin: '-18% 0px -22% 0px',
    }
  );

  document.querySelectorAll('.scene-step').forEach((step) => sceneObserver.observe(step));

  let ticking = false;
  const updateProgress = () => {
    const rect = scrollySection.getBoundingClientRect();
    const span = rect.height - window.innerHeight;
    const progress = span > 0 ? Math.min(Math.max((-rect.top + 120) / span, 0), 1) : 0;
    root.style.setProperty('--scene-progress', progress.toFixed(4));
    ticking = false;
  };

  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(updateProgress);
      ticking = true;
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();
})();
