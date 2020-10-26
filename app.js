document.addEventListener('DOMContentLoaded', () => {

    const grid = document.getElementById('grid')
    const resultDisplay = document.getElementById('result')
    const play = document.getElementById('play')

    let cardsChosen = []
    let cardsChosenId = []
    const cardsWon = []

    //card options
    const cardArray = [{
            name: 'elefante',
            img: 'images/elefante.svg'
        },
        {
            name: 'gato',
            img: 'images/gato.svg'
        },
        {
            name: 'mariposa',
            img: 'images/mariposa.svg'
        },
        {
            name: 'pajaro',
            img: 'images/pajaro.svg'
        },
        {
            name: 'vaca',
            img: 'images/vaca.svg'
        },
        {
            name: 'cebra',
            img: 'images/cebra.svg'
        },
        {
            name: 'elefante',
            img: 'images/elefante.svg'
        },
        {
            name: 'gato',
            img: 'images/gato.svg'
        },
        {
            name: 'mariposa',
            img: 'images/mariposa.svg'
        },
        {
            name: 'pajaro',
            img: 'images/pajaro.svg'
        },
        {
            name: 'vaca',
            img: 'images/vaca.svg'
        },
        {
            name: 'cebra',
            img: 'images/cebra.svg'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    //create your board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            let card = document.createElement('img')
            card.setAttribute('src', 'images/Fondo.svg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            card.classList.add('element')
            grid.appendChild(card)
        }
    }

    //check for matches
    function checkForMatch() {
        let cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        if (optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', 'images/Fondo.svg')
            cards[optionTwoId].setAttribute('src', 'images/Fondo.svg')
            play.innerHTML = 'Has hecho click en la misma imagen.'
            play.classList.add('error')
                //alert('You have clicked the same image!')
        } else if (cardsChosen[0] === cardsChosen[1]) {
            play.innerHTML = 'Has encontrado una pareja.'
            play.classList.remove('error')
                //alert('You found a match')
            cards[optionOneId].setAttribute('src', 'images/void.svg')
            cards[optionTwoId].setAttribute('src', 'images/void.svg')
            cards[optionOneId].classList.remove('bordered')
            cards[optionTwoId].classList.remove('bordered')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/Fondo.svg')
            cards[optionTwoId].setAttribute('src', 'images/Fondo.svg')
            cards[optionOneId].classList.remove('bordered')
            cards[optionTwoId].classList.remove('bordered')
            play.innerHTML = 'Parece que no eran iguales.'
            play.classList.add('error')
                //alert('Sorry, try again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            play.innerHTML = ''
            resultDisplay.textContent = '¡Enhorabuena! ¡Los emparejastes a todos!'
        }
    }

    //flip your card
    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
        this.classList.add('bordered')

    }

    createBoard()
})