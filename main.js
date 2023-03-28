let icon = document.querySelector('[data-js="icon"]');
const options = document.querySelectorAll('.option');
const cards = document.querySelectorAll('.card');

icon.addEventListener("click", (e) => {
  let el = e.target;

  if(el.classList.contains("fa-bars")){
    el.className = "fa-solid fa-xmark fa-2x hidden"
  } else {
    el.className = "fa-solid fa-bars fa-2x hidden"
  }
  console.log(el)
})


options.forEach((option, index) => {
  option.addEventListener('click', () => {
    // Esconde todos os cards
    cards.forEach((card) => {
      card.style.display = 'none';
    });

    // Exibe apenas o card correspondente
    const card = cards[index];
    card.style.display = 'block';
  });
});
