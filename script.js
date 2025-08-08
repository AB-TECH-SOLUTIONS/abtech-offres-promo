// MODE SOMBRE
const toggle = document.getElementById('darkModeToggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// FORM POPUP
const form = document.getElementById('contactForm');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  fetch(form.action, {
    method: form.method,
    body: formData,
    headers: { 'Accept': 'application/json' }
  }).then(response => {
    if (response.ok) {
      popup.style.display = 'flex';
      form.reset();
    } else {
      alert('Erreur lors de l\'envoi, veuillez réessayer.');
    }
  });
});

closePopup.addEventListener('click', () => {
  popup.style.display = 'none';
});

