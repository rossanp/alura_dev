function addLikes(i) {
    const likeElement = document.querySelector("#card_like-"+i);
    let dadosCard = [];

    if (localStorage.hasOwnProperty("dadosCard")) {
        dadosCard = JSON.parse(localStorage.getItem("dadosCard"));
    }

    let like = dadosCard[i].likes;

    if (likeElement.innerHTML) {
        const count = parseInt(likeElement.innerHTML);
        likeElement.innerHTML = count + 1;
        like = count + 1;
    }

    dadosCard[i].likes= like

    localStorage.setItem("dadosCard", JSON.stringify(dadosCard));

    console.log(dadosCard[i]);
}

function addComments(i) {
    const commentsElement = document.querySelector("#card_comments-"+i);
    let dadosCard = [];

    if (localStorage.hasOwnProperty("dadosCard")) {
        dadosCard = JSON.parse(localStorage.getItem("dadosCard"));
    }

    let comments = dadosCard[i].comments;

    if (commentsElement.innerHTML) {
        const count = parseInt(commentsElement.innerHTML);
        commentsElement.innerHTML = count + 1;
        comments = count + 1;
    }

    dadosCard[i].comments= comments

    localStorage.setItem("dadosCard", JSON.stringify(dadosCard));

    console.log(dadosCard[i]);
}