const pers = document.querySelector('.pers');
const obst = document.querySelector('.obst');

const pulo = () => {
    pers.classList.add('pulo');

    setTimeout(() =>{
        pers.classList.remove('pulo');
    },530);
}

const loop = setInterval(() => {

    console.log('loop')

    const obstPosition = obst.offsetLeft;
    const persPosition = +window.getComputedStyle(pers).bottom.replace('px', '');

    console.log(persPosition);

    if(obstPosition <= 91 && obstPosition>0 && persPosition < 46){ /*Estabele a as posições para quando o personagem morre*/
        obst.style.animation = 'none';
        obst.style.left = `${obstPosition}px`;

        pers.style.animation = 'none';
        pers.style.bottom = `${persPosition}px`;

        pers.src='PDeath-removebg-preview.png'; /* Inclui a imagem do personagem morto */

        clearInterval(loop);

    }
}, 10);

document.addEventListener('keydown', pulo); /* Faz com que qualquer tela realize a ação de pular */
