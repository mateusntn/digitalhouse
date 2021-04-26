const username = prompt('Qual o seu nome?'); // retorna texto inserido pelo usuário

let elementHeader = document.querySelector('.logo');

elementHeader.insertAdjacentHTML('afterend',`<strong>Olá, ${username}</strong>`);


const darkMode = () => {
    let element = document.body;
    element.classList.toggle("body-darkmode");

    let footer = document.querySelector('footer');
    footer.classList.toggle("darkmode")

    let descricao = document.querySelectorAll('div.descricao')
    console.log(descricao)
    descricao[0].classList.toggle("darkmode")
    descricao[1].classList.toggle("darkmode")
}
