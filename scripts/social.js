const btnComments = document.querySelector('#addComments')
let dadosCard = []

function addComments() {

    dadosCard = JSON.parse(localStorage.getItem("dadosCard"))
    const nComments = document.querySelector('#card__n-comments')
    const nome = document.querySelector('.card__title')

    console.log("Funfou!!")

}

btnComments.addEventListener('click', () => {
    addComments()
})