const form = document.querySelector(".newsletter-form");
if (!form) return;
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = form.querySelector('input[name="email"]').value.trim();
  const msg = form.querySelector(".msg");
  if (!email) {
    msg.style.display = "block";
    msg.textContent = "Veuillez entrer une adresse email valide.";
    return;
  }
  // Simule une inscription (ici envoyer à un endpoint si disponible)
  msg.style.display = "block";
  msg.textContent = "Merci ! Vous êtes inscrit(e) — vérifiez votre boîte mail.";
  form.reset();
  setTimeout(() => {
    msg.style.display = "none";
  }, 5000);
});
