const pesquisa = document.getElementById('title-img')

pesquisa.addEventListener('click', function () {

    let inpt = document.getElementById("search");
    let pesquisa = document.getElementById('title-img')
    let logo = document.getElementById('logo')
    let header = document.getElementById('header')
    
    /* Modificando o CSS */
    if (inpt.style.display === 'none') {
        header.style.gridTemplateColumns = '45% 40% 15%'
        pesquisa.style.display = 'block'
        logo.style.display = 'block'
        inpt.style.display = 'none'
    } else {
        header.style.gridTemplateColumns = '0% 85% 15%'
        pesquisa.style.display = 'none'
        logo.style.display = 'none'
        inpt.style.display = 'block'
        inpt.style.margin = '0'
    }
})