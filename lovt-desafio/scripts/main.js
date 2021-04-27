const username = prompt('Qual o seu nome?'); // retorna texto inserido pelo usuário

let elementHeader = document.querySelector('.logo');

elementHeader.insertAdjacentHTML('afterend',`<strong>Olá, ${username}</strong>`);

const darkMode = () => {
    document.body.classList.toggle('darkmode');
}

setTimeout(() => {
    document.body.querySelector('div.modal-container').classList.toggle('show');
}, 2000);

const hideModal = () => {
    document.body.querySelector('div.modal-container').classList.toggle('show');
}
