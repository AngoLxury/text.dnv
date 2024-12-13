const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", this.window.scrollY > 0);
})

// Seleciona todos os botões de compra
const buyButtons = document.querySelectorAll('.buy-btn');

// Adiciona um evento de clique a cada botão
buyButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert('Produto adicionado ao carrinho!');
  });
});
