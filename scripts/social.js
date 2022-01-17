function functionAddComments() {

    let comments = document.getElementById('card__n-comments')
    let nComments = 0
    let dadosCard = []
    let j = 0
    const title = document.getElementById('card__title-'+j)
    
    if (localStorage.hasOwnProperty("dadosCard")) {
        dadosCard = JSON.parse(localStorage.getItem("dadosCard"))
    }

    for ( i = 0; i < dadosCard.length; i++ ) {
        if (title == dadosCard[i].title) {
            console.log("Certo")
        } else {
            console.log("Errado")
        }
    }

    
    

    console.log(typeof document.getElementById('card__title-0'.value))

/*     for ( i = 0; i < dadosCard.length; i++ ) {


    } */

/*     

    for (i=0; i < dadosCard.length; i++) {
            if (dadosCard[i].title == title) {
                nComments = nComments + 1
            }
                console.log(title)
        }

    comments.innerHTML = nComments */
}



















/* const btnComments = document.getElementById('functionAddComments')


function functionAddComments() {

    
    dadosCard = JSON.parse(localStorage.getItem("dadosCard"))
    const comments = document.querySelector('#card__n-comments')
    const nome = document.querySelector('.card__title')
    let nComments = 0

    

    

    comments.innerHTML = nComments
    console.log(nComments)

}

/* btnComments.addEventListener('click', () => {
    adcComments()
}) */