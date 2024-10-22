// Selecionando os elementos necessários
const ratingButtons = document.querySelectorAll('.card__buttons button');
const submitButton = document.querySelector('.submit');
const ratingCard = document.querySelector('.card');
const thankYouCard = document.querySelector('.card-2');
const ratingSpan = thankYouCard.querySelector('span');

// Variável para armazenar a avaliação selecionada
let selectedRating = null;

// Adicionando o evento de clique nos botões de avaliação
ratingButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Armazenar a avaliação selecionada
    selectedRating = button.textContent;

    // Remover a classe 'selected' de todos os botões e adicionar no botão clicado
    ratingButtons.forEach(btn => btn.classList.remove('selected'));
    button.classList.add('selected');
  });
});

// Adicionando o evento de clique no botão de submit
submitButton.addEventListener('click', () => {
  // Verificar se uma avaliação foi selecionada
  if (selectedRating) {
    // Atualizar o span com a avaliação selecionada
    ratingSpan.textContent = `You selected ${selectedRating} out of 5`;

    // Ocultar o card de avaliação e mostrar o card de agradecimento
    ratingCard.style.opacity = '0';
    ratingCard.style.visibility = 'hidden';
    thankYouCard.classList.add('visible');
  } else {
    alert('Please select a review rating before submitting!');
  }
});


