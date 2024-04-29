
// Adicionando um evento ao elemento com id 'eraser'
document.querySelector("#eraser").addEventListener("click", () => {
  // O elemento com id 'eraser' é clicado, o conteúdo dele com id 'groceryItems' é limpo
  document.querySelector("#groceryItems").textContent = "";
})

// Adiciona um evento quando a tecla apertada
document.querySelector("#userInput").addEventListener("keydown", (event) => {
  // Verifica se a tecla pressionada é 'Enter'
  if(event.key == "Enter")
    // SE a tecla 'Enter' for pressionada, chama a função addItem()
    addItem();
});

// Função chamada 'addItem'
addItem = () => {
  // criando um elemento <h2> para representar um item da lista de compras
  const item = document.createElement("h2")
  // Define o texto como "- " seguido do valor inserido no campo de entrada com o id 'userInput'
  item.textContent = "- " + document.querySelector("#userInput").value;

  // Adiciona um evento de clique ao item
  item.addEventListener("click", () => {
    // SE o estilo de texto do item não for 'line-through', define como 'line-through'
    if(item.style.textDecoration != "line-through")
      item.style.textDecoration = "line-through";
    // Caso contrário, remove o estilo de 'line-through' (não riscado)
    else
      item.style.textDecoration = "none";
  })

  // Adiciona o item a lista de compras (elemento com o id "groceryItems")
  document.querySelector("#groceryItems").appendChild(item);

  // Limpa o valor do campo de entrada com o id 'userInput' após adicionar o item
  document.querySelector("#userInput").value = "";
}
