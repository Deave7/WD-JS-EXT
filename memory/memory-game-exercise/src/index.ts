let words: string[] = ["Elephant", "Dog", "Cat", "Griaffe", "Hawk", "Rabbit", "Mouse", "Elk" ]
let cardList: NodeList = document.querySelectorAll('.memory-card')

cardList.forEach(element => {
    element.addEventListener('click', function(event) {
        const clickedCard = event.target
        flipCard(clickedCard)
    })
});

const flipCard = (clickedCard) => {
    clickedCard.classList.add('flip')
}

