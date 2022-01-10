const save = document.querySelector('#btn-save')
let id = 1
let dadosCard = []

function saveCode() {

    const title = document.querySelector('.title-data').value
    const description = document.querySelector('.description-data').value
    const language = document.querySelector('#linguagem').value
    const areaCodigo = document.querySelector('.inpt-dev')
    const cor = document.getElementById('colorVal').value

    const cod = areaCodigo.innerText


    /* Verifica se a propriedade existe. Caso exista, converte de String para Object */
    if (localStorage.hasOwnProperty("dadosCard")) {
        dadosCard = JSON.parse(localStorage.getItem("dadosCard"))
    }

    /* Verifica o próximo id vazio */
    if (dadosCard.length >= 0) {
        for (i = 0; i <= dadosCard.length; i++) {
            id = i+1
        }
        
    /* Incluindo novos dados na lista */
    dadosCard.push(
        {
            id: id,
            title: title,
            description: description,
            linguagen: language,
            cod: cod,
            cor: cor,
            comments: 0,
            likes: 0
        })

    }

    /* Retornando o array convertido para o localStorage */
    localStorage.setItem("dadosCard", JSON.stringify(dadosCard))

    /* console.log(dadosCard) */
}

save.addEventListener('click', () => {
    saveCode()
})