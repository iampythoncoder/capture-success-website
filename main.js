(() => {
  const root = document.documentElement;
  const topbar = document.querySelector('.topbar');
  const progressFill = document.querySelector('.scroll-progress span');
  const parallaxTargets = Array.from(document.querySelectorAll('[data-parallax]'));
  const revealTargets = Array.from(document.querySelectorAll('[data-reveal]'));
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (revealTargets.length > 0) {
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
        threshold: 0.16,
        rootMargin: '0px 0px -10% 0px',
      }
    );

    revealTargets.forEach((target, index) => {
      target.style.setProperty('--reveal-delay', `${Math.min(index * 45, 260)}ms`);
      revealObserver.observe(target);
    });
  }

  let ticking = false;

  const updateScrollUi = () => {
    const y = window.scrollY || window.pageYOffset;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = maxScroll > 0 ? Math.min(y / maxScroll, 1) : 0;

    root.style.setProperty('--scroll-progress', progress.toFixed(4));

    if (topbar) {
      topbar.classList.toggle('is-scrolled', y > 12);
    }

    if (!reduceMotion && parallaxTargets.length > 0) {
      parallaxTargets.forEach((el) => {
        const speed = Number(el.dataset.parallax || 0);

        if (!Number.isFinite(speed) || speed === 0) {
          return;
        }

        const rect = el.getBoundingClientRect();
        const centerDist = rect.top + rect.height / 2 - window.innerHeight / 2;
        const offset = -centerDist * speed;
        el.style.setProperty('--parallax-y', `${offset.toFixed(2)}px`);
      });
    }

    if (progressFill) {
      progressFill.style.transform = `scaleX(${progress.toFixed(4)})`;
    }

    ticking = false;
  };

  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(updateScrollUi);
      ticking = true;
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();
})();
