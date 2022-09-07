const number = (Math.random() * 20) + 1;
const secretNumber = Math.round(number);
let score = 20;
document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click', function() {
const guess = Number(document.querySelector('.guess').value);
console.log(guess, typeof(guess));

if (!guess) {
document.querySelector('.message').textContent =//Isso ocorrerá se não for adicionado um número.
"❌ Número ausente"
}
else if(guess === secretNumber){
    document.querySelector('.message').textContent = "Número certo!!";
}
else if(guess > secretNumber){
    if (score > 1){document.querySelector('.message').textContent = "Número maior!!";
    score--;
document.querySelector('.score').textContent = score;}
    else{document.querySelector('.message').textContent = "Você perdeu!"}
    document.querySelector('.score').textContent = 0
}
else if(guess < secretNumber){
    document.querySelector('.message').textContent = "Número menor!!";
    score--;
    document.querySelector('.score').textContent = score;
}
});

