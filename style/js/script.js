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
