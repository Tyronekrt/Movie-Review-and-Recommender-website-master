(function () {
  "use strict";

  var nav = document.getElementById("siteNav");

  function updateNav() {
    if (!nav) return;
    if (window.scrollY > 12) {
      nav.classList.add("is-scrolled");
    } else {
      nav.classList.remove("is-scrolled");
    }
  }

  updateNav();
  window.addEventListener("scroll", updateNav, { passive: true });

  var messages = document.querySelectorAll(".site-message");

  messages.forEach(function (message) {
    var close = message.querySelector(".message-close");

    function dismiss() {
      message.style.transition = "opacity .25s ease, transform .25s ease";
      message.style.opacity = "0";
      message.style.transform = "translateY(-6px)";
      window.setTimeout(function () {
        message.remove();
      }, 250);
    }

    if (close) {
      close.addEventListener("click", dismiss);
    }

    window.setTimeout(dismiss, 6500);
  });

  var revealItems = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach(function (item) {
      item.classList.add("is-visible");
    });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -30px 0px" });

  revealItems.forEach(function (item) {
    observer.observe(item);
  });

  document.querySelectorAll(".poster-img").forEach(function (image) {
    image.addEventListener("error", function () {
      image.style.display = "none";
      var placeholder = document.createElement("div");
      placeholder.className = "poster-placeholder";
      placeholder.textContent = "C";
      image.parentNode.insertBefore(placeholder, image);
    });
  });
})();
