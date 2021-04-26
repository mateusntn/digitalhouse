const username = prompt('Qual o seu nome?'); // retorna texto inserido pelo usuário

let elementHeader = document.querySelector('.logo');

elementHeader.insertAdjacentHTML('afterend',`<strong>Olá, ${username}</strong>`);


const darkMode = () => {
    document.body.classList.toggle("darkmode");
}
