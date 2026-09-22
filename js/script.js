document.addEventListener("DOMContentLoaded", function () {
  // 1. Upravljanje obaveznim kolačićima
  const cookieBanner = document.getElementById("cookie-banner");
  const acceptBtn = document.getElementById("accept-cookies");

  if (cookieBanner && acceptBtn) {
    if (localStorage.getItem("cookies_accepted") === "true") {
      cookieBanner.classList.add("hidden");
    }

    acceptBtn.addEventListener("click", function () {
      localStorage.setItem("cookies_accepted", "true");
      cookieBanner.classList.add("hidden");
    });
  }

  // 2. Funkcionalnost Newsletter forme
  const newsletterForms = document.querySelectorAll(".newsletter-form");
  newsletterForms.forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const emailInput = form.querySelector('input[type="email"]');
      if (emailInput && emailInput.value.trim() !== "") {
        alert("Hvala na prijavi! Vaš email (" + emailInput.value + ") je uspješno dodan na listu.");
        emailInput.value = "";
      }
    });
  });

  // 3. Funkcionalnost kontakt forme
  const contactForms = document.querySelectorAll(".contact-form");
  contactForms.forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Hvala vam na upitu! Naš tim za informacijsku sigurnost javit će vam se u najkraćem roku.");
      form.reset();
    });
  });
});
