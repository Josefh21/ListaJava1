let vogais = ["a", "e", "i", "o", "u"];

const letter = prompt("Qual a sua letra?")

if(vogais.includes(letter.toLowerCase())){
    console.log("É uma vogal!")
}
else{
    console.log("É uma consoante!")
}