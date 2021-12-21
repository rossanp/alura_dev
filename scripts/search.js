const pesquisa = document.getElementById('title-img')

pesquisa.addEventListener('click', function () {

    let inpt = document.getElementById("search");
    let pesquisa = document.getElementById('title-img')
    let menuHamb = document.getElementById('container-check')
    let header = document.getElementById('header')
    
    /* Modificando o CSS */
    if (inpt.style.display === 'none') {
        header.style.gridTemplateColumns = '45% 40% 15%'
        pesquisa.style.display = 'block'
        menuHamb.style.display = 'block'
        inpt.style.display = 'none'
    } else {
        header.style.gridTemplateColumns = '45% 55%'
        pesquisa.style.display = 'none'
        menuHamb.style.display = 'none'
        inpt.style.display = 'block'
    }
})