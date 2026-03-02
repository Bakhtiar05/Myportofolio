// navbar-scroll-fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// hamburger-menu
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector('#nav-menu')

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle('hidden');
});


document.getElementById('kontak-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Mencegah pengiriman form default

  const formData = new FormData(this);
  const url = this.action;
  const formMessage = document.querySelector('.form-message');
  const loader = document.querySelector('.loader');

  loader.style.display = 'block';
  formMessage.textContent = ''; // Hapus pesan sebelumnya

  fetch(url, {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    loader.style.display = 'none'; // Sembunyikan loader setelah respons diterima
    if (response.ok) {
      formMessage.innerHTML = 'Pesan berhasil dikirim. Terima kasih 🙌<br>Refresh halaman ini jika anda mengirim pesan lain nya 😁';
      formMessage.style.color = 'green'; // Ubah warna pesan sesuai kebutuhan
    } else {
      formMessage.textContent = 'Gagal mengirim pesan. Silakan coba lagi.';
      formMessage.style.color = 'red'; // Ubah warna pesan sesuai kebutuhan
    }
  })
  .catch(error => {
    loader.style.display = 'none'; // Sembunyikan loader jika terjadi kesalahan
    formMessage.textContent = 'Terjadi kesalahan: ' + error.message;
    formMessage.style.color = 'red'; // Ubah warna pesan sesuai kebutuhan
  });
});

// Scroll Reveal Animations
document.addEventListener("DOMContentLoaded", function() {
  const reveals = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  });

  reveals.forEach(reveal => {
    revealObserver.observe(reveal);
  });
});

// Hero 3D Parallax Effect
document.addEventListener("DOMContentLoaded", function() {
  const wrapper = document.getElementById("hero-image-wrapper");
  const heroImage = document.getElementById("hero-image");

  if (!wrapper || !heroImage) return;

  // Only apply parallax on desktop
  const isDesktop = window.matchMedia("(min-width: 1024px)");

  function handleMouseMove(e) {
    if (!isDesktop.matches) return;

    const rect = wrapper.getBoundingClientRect();
    
    // Calculate mouse position relative to the center of the element
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Adjust these values to increase/decrease the tilt amount
    const tiltX = (y / rect.height) * -20; // Max tilt up/down 10 deg
    const tiltY = (x / rect.width) * 20; // Max tilt left/right 10 deg

    heroImage.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.05, 1.05, 1.05) translateZ(20px)`;
  }

  function handleMouseLeave() {
    if (!isDesktop.matches) return;
    
    // Reset transform on mouse leave
    heroImage.style.transform = `rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1) translateZ(0)`;
  }

  wrapper.addEventListener("mousemove", handleMouseMove);
  wrapper.addEventListener("mouseleave", handleMouseLeave);
});
