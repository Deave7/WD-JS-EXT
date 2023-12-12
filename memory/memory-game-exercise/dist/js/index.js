let cardList = document.querySelectorAll('[data-card]');
let clickedCards = [];
cardList.forEach(element => {
    element.addEventListener('click', function (event) {
        const clickedCard = event.currentTarget;
        clickedCards.push(clickedCard);
        flipCard(clickedCard);
        if (clickedCards.length == 2) {
            const [firstCard, secondCard] = clickedCards;
            if (firstCard.dataset.card === secondCard.dataset.card) {
                firstCard.classList.add('matched');
                secondCard.classList.add('matched');
                clickedCards = [];
            }
            else {
                setTimeout(() => {
                    firstCard.classList.remove('flip');
                    secondCard.classList.remove('flip');
                }, 1000);
            }
            clickedCards = [];
        }
    });
});
const flipCard = (clickedCard) => {
    clickedCard.classList.add('flip');
};
