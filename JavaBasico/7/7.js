const sabores = new Map([
    ["Chocolate", 1.50],
    ["Morango", 2.50],
    ["Creme", 2.50],
    ["Manga", 3.20],
    ["Melância", 3.40],
    ["Vanilla Ice", 3.00],
    ["Céu Azul", 3.60],
    ["Brownie", 4.00],
    ["Hawaiano", 5.00]
  ]);

  const escolha = prompt("Qual é o sabor que você deseja?");

  console.log(`O preço do sabor ${escolha} é de R$ ${sabores.get(escolha)}`);