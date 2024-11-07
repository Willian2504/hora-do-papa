const mainImage = document.querySelector('.main-image');
const thumbnails = document.querySelectorAll('.thumbnail');

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', (event) => {
    mainImage.src = event.target.src;
  });
});

// Função para zoom (simplificada)
mainImage.addEventListener('click', () => {
  mainImage.classList.toggle('zoomed');
});


