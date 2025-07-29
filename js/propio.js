  let Principalslides = document.querySelectorAll('.Principalslide');
    let index = 0;

    function showPrincipalSlide(i) {
      Principalslides.forEach(Principalslide => Principalslide.classList.remove('active'));
      Principalslides[i].classList.add('active');
    }

    function nextPrincipalSlide() {
      index = (index + 1) % Principalslides.length;
      showPrincipalSlide(index);
    }

    function prevPrincipalSlide() {
      index = (index - 1 + Principalslides.length) % Principalslides.length;
      showPrincipalSlide(index);
    }

    // Auto-Principalslide (opcional)
    setInterval(nextPrincipalSlide, 5000);

    
 /********** Galeria **********/

const images = document.querySelectorAll('.galeria img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    let currentIndex = 0;

    images.forEach((img, index) => {
      img.addEventListener('click', () => {
        currentIndex = index;
        showLightbox();
      });
    });

    function showLightbox() {
      lightbox.style.display = 'flex';
      lightboxImg.src = images[currentIndex].src;
    }

    function closeLightbox() {
      lightbox.style.display = 'none';
    }

    function changeSlide(n) {
      currentIndex += n;
      if (currentIndex < 0) currentIndex = images.length - 1;
      if (currentIndex >= images.length) currentIndex = 0;
      lightboxImg.src = images[currentIndex].src;
    }

    // Fechar clicando fora da imagem
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target.classList.contains('close')) {
        closeLightbox();
      }
    });

    /********** Fim da Galeria **********/