const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav-links');

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Abrir menu' : 'Fechar menu');
    navigation.classList.toggle('is-open', !isOpen);
  });

  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Abrir menu');
      navigation.classList.remove('is-open');
    });
  });
}

document.querySelectorAll('.print-button').forEach((button) => {
  button.addEventListener('click', () => window.print());
});

const yearElement = document.querySelector('#year');
if (yearElement) yearElement.textContent = new Date().getFullYear();

const revealItems = document.querySelectorAll('.section-content, .hero-card, .project-card, .achievement-card');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => {
    item.classList.add('reveal');
    revealObserver.observe(item);
  });
}

const photoInput = document.querySelector('#profile-photo');
const photoPreview = document.querySelector('#photo-preview');
const photoPrompt = document.querySelector('.photo-prompt');
if (photoInput && photoPreview && photoPrompt) {
  photoInput.addEventListener('change', () => {
    const file = photoInput.files && photoInput.files[0];
    if (!file || !file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      photoPreview.src = reader.result;
      photoPreview.hidden = false;
      photoPrompt.hidden = true;
    });
    reader.readAsDataURL(file);
  });
}

const steamPhotoInput = document.querySelector('#steam-photo');
const steamPhotoPreview = document.querySelector('#steam-photo-preview');
const steamPhotoPrompt = document.querySelector('.steam-photo-prompt');
if (steamPhotoInput && steamPhotoPreview && steamPhotoPrompt) {
  steamPhotoInput.addEventListener('change', () => {
    const file = steamPhotoInput.files && steamPhotoInput.files[0];
    if (!file || !file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      steamPhotoPreview.src = reader.result;
      steamPhotoPreview.hidden = false;
      steamPhotoPrompt.hidden = true;
    });
    reader.readAsDataURL(file);
  });
}

