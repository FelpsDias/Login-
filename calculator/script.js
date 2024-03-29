const images = document.querySelectorAll('.image');

images.forEach(image => {
  image.addEventListener('click', () => {
    // Aqui você pode adicionar a lógica para ampliar a imagem ou abrir um modal, etc.
    console.log('Imagem clicada:', image.style.backgroundImage);
  });
});
