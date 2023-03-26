let icon = document.querySelector('[data-js="icon"]');

console.log(icon)

icon.addEventListener("click", (e) => {
  let el = e.target;

  if(el.classList.contains("fa-bars")){
    el.className = "fa-solid fa-xmark fa-4x show"
  } else {
    el.className = "fa-solid fa-bars fa-4x show"
  }
  console.log(el)
})
