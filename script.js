//deixa todos placeholders sem fundo e por padrão com a cor de texto branca.

document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('.input-container input');

    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.dataset.placeholder = this.placeholder;
            this.placeholder = '';
        });

        input.addEventListener('blur', function() {
            if (this.value === '') {
                this.placeholder = this.dataset.placeholder;
            }
        });
    });
});

//gerencia a animação de troca dos 4 anuncios abaixo dos links

document.addEventListener("DOMContentLoaded", function() {
    // ocult a div .anuncios2
    document.querySelector('.anuncios2').style.display = 'none';

    //apos 5 segundos, alternar entre as divs
    setTimeout(function() {
        // mostrar a div .anuncios2
        document.querySelector('.anuncios2').style.display = 'flex';
        // mcultar a div .anuncios
        document.querySelector('.anuncios').style.display = 'none';
        
        // trocar entre as divs a cada 5 segundos
        setInterval(function() {
            if (document.querySelector('.anuncios').style.display === 'flex') {
                // se a div .anuncios estiver visivel, vai esconder e mostrar a div .anuncios2
                document.querySelector('.anuncios').style.display = 'none';
                document.querySelector('.anuncios2').style.display = 'flex';
            } else {
                // se a div .anuncios2 estiver visível, vai escondre e mostrar a div .anuncios
                document.querySelector('.anuncios').style.display = 'flex';
                document.querySelector('.anuncios2').style.display = 'none';
            }
        }, 4000);
    }, 4000);
});


// efeito de escurecimento na foto da div dos animais

const imgs = document.querySelectorAll('.animais img');

imgs.forEach(img => {
    img.addEventListener('mouseenter', () => {
        imgs.forEach(otherImg => {
            if (otherImg !== img) {
                otherImg.classList.add('dim');
            }
        });
    });

    img.addEventListener('mouseleave', () => {
        imgs.forEach(otherImg => {
            otherImg.classList.remove('dim');
        });
    });
});




