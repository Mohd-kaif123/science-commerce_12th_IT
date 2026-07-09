// ============ Mobile nav toggle ============
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
      toggle.textContent = links.classList.contains('open') ? '✕' : '☰';
    });
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.textContent = '☰';
    }));
  }

  // ============ Count-up animation for numbers with data-count ============
  const counters = document.querySelectorAll('[data-count]');
  const runCounter = (el) => {
    const target = parseFloat(el.getAttribute('data-count'));
    const suffix = el.getAttribute('data-suffix') || '';
    const decimals = el.getAttribute('data-decimals') ? parseInt(el.getAttribute('data-decimals')) : 0;
    const duration = 1400;
    const start = performance.now();
    function tick(now) {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = target * eased;
      el.textContent = val.toFixed(decimals) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  };
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          runCounter(entry.target);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    counters.forEach(c => io.observe(c));
  } else {
    counters.forEach(runCounter);
  }

  // ============ Scroll reveal ============
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    const rio = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
          rio.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    reveals.forEach(r => {
      r.style.opacity = 0;
      r.style.transform = 'translateY(24px)';
      r.style.transition = 'opacity .6s ease, transform .6s ease';
      rio.observe(r);
    });
  }

  // ============ Toppers filter pills ============
  const pills = document.querySelectorAll('.pill[data-filter]');
  const topperCards = document.querySelectorAll('[data-category]');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const filter = pill.getAttribute('data-filter');
      topperCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // ============ Admission form -> WhatsApp ============
  const admissionForm = document.getElementById('admissionForm');
  if (admissionForm) {
    admissionForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('fname').value.trim();
      const phone = document.getElementById('fphone').value.trim();
      const cls = document.getElementById('fclass').value;
      const message = document.getElementById('fmessage').value.trim();

      if (!name || !phone || !cls) {
        return;
      }

      const text = `Naya Admission Enquiry - Bright Classes%0A%0A` +
        `Naam: ${encodeURIComponent(name)}%0A` +
        `Contact No: ${encodeURIComponent(phone)}%0A` +
        `Class/Course: ${encodeURIComponent(cls)}%0A` +
        (message ? `Message: ${encodeURIComponent(message)}%0A` : '');

      const waNumber = '917021804267';
      const waUrl = `https://wa.me/${waNumber}?text=${text}`;

      const successBox = document.getElementById('formSuccess');
      if (successBox) {
        successBox.classList.add('show');
        successBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }

      admissionForm.reset();
      window.open(waUrl, '_blank');
    });
  }
});
