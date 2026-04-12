(() => {
  const scenes = [
    {
      step: '01',
      label: 'Project Review',
      title: 'Only startups with clear work plans are listed',
      text: 'Before a startup is posted, we check that the founder has a real project, defined tasks, and clear team needs.',
      modules: [
        ['Quality Check', 'We reject listings with vague or missing tasks.'],
        ['Role Clarity', 'Each listing states exactly which roles are needed.'],
        ['Founder Response', 'Founders must respond quickly to applicants.'],
        ['Ready to Build', 'Only active teams are published.'],
      ],
      panel: {
        tag: 'Step 1',
        title: 'Start with clear, active startup opportunities.',
        text: 'You do not waste time on dead listings. Every listed team is reviewed and ready to work.',
        metrics: [
          ['Reviewed Listings', '92%', '92%'],
          ['Clear Role Definitions', '88%', '88%'],
          ['Fast Founder Replies', '81%', '81%'],
        ],
      },
    },
    {
      step: '02',
      label: 'Team Matching',
      title: 'Students are matched to teams where they can contribute now',
      text: 'Matching is based on skills, role fit, and availability, so you join a team that can use your work right away.',
      modules: [
        ['Skill Match', 'Connects applicants to relevant roles.'],
        ['Availability Fit', 'Aligns by weekly hours and timezone.'],
        ['Team Fit Check', 'Catches mismatches before onboarding.'],
        ['Quick Routing', 'Qualified applicants are introduced fast.'],
      ],
      panel: {
        tag: 'Step 2',
        title: 'Matching is built for immediate contribution.',
        text: 'The goal is simple: put each person where they can start helping in the first week.',
        metrics: [
          ['Typical Match Time', '36h', '74%'],
          ['Role Fit Quality', '89%', '89%'],
          ['Onboarding Delay', 'Low', '64%'],
        ],
      },
    },
    {
      step: '03',
      label: 'Weekly Delivery',
      title: 'Teams run weekly plans with clear owners and deadlines',
      text: 'Each task has an owner, deadline, and expected output so everyone knows what must be delivered each week.',
      modules: [
        ['Weekly Plan', 'Sets the work for the next sprint.'],
        ['Progress View', 'Tracks done, blocked, and in-progress work.'],
        ['Decision Notes', 'Records key project decisions.'],
        ['Review Cycle', 'Checks delivery quality at week end.'],
      ],
      panel: {
        tag: 'Step 3',
        title: 'Progress is based on delivered work.',
        text: 'This is real startup work. Teams are measured by what they finish, not by attendance.',
        metrics: [
          ['Sprint Cadence', 'Weekly', '83%'],
          ['Milestones Hit', '87%', '87%'],
          ['Decision Speed', 'Fast', '72%'],
        ],
      },
    },
    {
      step: '04',
      label: 'Founder Support',
      title: 'Founders build focused teams instead of sorting random applicants',
      text: 'Founders receive contributors grouped around actual priorities, so they can move faster without wasting time.',
      modules: [
        ['Team Builder', 'Creates balanced working teams.'],
        ['Operating Rhythm', 'Keeps the weekly schedule stable.'],
        ['Issue Escalation', 'Flags blockers early.'],
        ['Growth Planning', 'Prepares teams for next milestones.'],
      ],
      panel: {
        tag: 'Step 4',
        title: 'Founders get help where execution is blocked.',
        text: 'The platform focuses contributors on the startup tasks that matter most each week.',
        metrics: [
          ['Team Setup Time', 'Fast', '79%'],
          ['Execution Improvement', 'High', '86%'],
          ['Operational Pressure', 'Lower', '68%'],
        ],
      },
    },
    {
      step: '05',
      label: 'Ownership',
      title: 'Contribution history is tracked and linked to ownership',
      text: 'Work history is documented so ownership discussions are based on actual contribution, not guesswork.',
      modules: [
        ['Contribution Log', 'Tracks who delivered each outcome.'],
        ['Ownership Review', 'Uses contribution data in review meetings.'],
        ['Founder Checkpoints', 'Runs scheduled alignment reviews.'],
        ['Long-term Continuity', 'Rewards consistent delivery over time.'],
      ],
      panel: {
        tag: 'Step 5',
        title: 'Ownership decisions stay transparent and fair.',
        text: 'Students can point to work they shipped. Founders can make decisions with clear records.',
        metrics: [
          ['Ownership Clarity', 'High', '88%'],
          ['Traceable Contribution', '91%', '91%'],
          ['Long-term Alignment', 'Strong', '77%'],
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
