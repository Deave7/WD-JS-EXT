interface Beer {
    id: number;
    name: string;
    tagline: string;
    first_brewed: string;
    description: string;
    image_url: string;
    abv: number;
    ibu: number;
    target_fg: number;
    target_og: number;
    ebc: number;
    srm: number;
    ph: number;
    attenuation_level: number;
    volume: {
        value: number;
        unit: string;
    };
    boil_volume: {
        value: number;
        unit: string;
    };
    method: {
        mash_temp: {
            temp: {
                value: number;
                unit: string;
            };
            duration: number;
        }[];
        fermentation: {
            temp: {
                value: number;
                unit: string;
            };
        };
        twist: null | string;
    };
    ingredients: {
        malt: {
            name: string;
            amount: {
                value: number;
                unit: string;
            };
        }[];
        hops: {
            name: string;
            amount: {
                value: number;
                unit: string;
            };
            add: string;
            attribute: string;
        }[];
        yeast: string;
    };
    food_pairing: string[];
    brewers_tips: string;
    contributed_by: string;
}
const beerURL = 'https://api.punkapi.com/v2/beers?page=2&per_page=80'
const randomButton = document.getElementById('random-button') as HTMLElement
const beerCard = document.querySelector('card') as HTMLElement
const beerImages = document.querySelectorAll('.beer-image') as NodeListOf<HTMLImageElement>;
const beerNames = document.querySelectorAll('.beer-name') as NodeListOf<HTMLElement>;
const seeMoreButton = document.querySelectorAll('.see-more-button') as NodeList
const homeButton = document.getElementById('home-button') as HTMLElement
const searchMenuButton = document.getElementById('search-menu-button') as HTMLElement
const cardSection = document.getElementById('card-section') as HTMLElement
const searchSection = document.getElementById('search-section') as HTMLElement
const inputField = document.querySelector('.input-field') as HTMLInputElement
const inputButton = document.querySelector('.input-button') as HTMLElement
const searchResultList = document.querySelector('.search-result-list') as HTMLElement
const mainSeeMoreButton = document.querySelector('#card-section > article > button.button.see-more-button') as HTMLElement
const description = document.querySelector('.description') as HTMLElement
const aBV = document.querySelector('.abv') as HTMLElement
const volume = document.querySelector('.volume') as HTMLElement
const ingredients = document.querySelector('.ingredients') as HTMLElement
const hops = document.querySelector('.hops') as HTMLElement
const foodPairing = document.querySelector('.food-pairing') as HTMLElement
const brewersTips = document.querySelector('.brewers-tips') as HTMLElement


async function getBeer() {
    try {
        const response = await fetch(beerURL)
        if (response.status === 200) {
            const data: Beer[] = await response.json();

            randomButton.addEventListener('click', function(event) {
                randomBeer(data)
            })
            inputButton.addEventListener('click', function(event) {
                searchBeer(data)
            })

            seeMoreButton.forEach(button => {
                addEventListener('click', function(event) {
                    const target = event.target as HTMLElement
                    const card = target.closest('.card') as HTMLElement | null
                    if (card) {
                        const beerNameElement = card.querySelector('.beer-name') as HTMLElement | null;
                        if (beerNameElement) {
                            const beerName = beerNameElement.textContent;
                            seeMore(data, beerName);
                        }
                    }
    

                })
            })
            
        }
        else {
            throw Error('Something went wrong, try again later')
        }
    }
    catch (error) {
        console.log(error)
    }
}

function randomBeer(data: Beer[]) : void {
    const randomBeer = data[Math.floor(Math.random() * data.length)]
    beerImages.forEach(element => {
        element.src = randomBeer.image_url
    })
    beerNames.forEach(element => {
        element.innerHTML = randomBeer.name
    })
    mainSeeMoreButton.style.display = 'inline'
}

getBeer();

searchMenuButton.addEventListener('click', function(event): void {
    cardSection.style.display = 'none'
    searchSection.style.display = 'flex'

})

function searchBeer(data) : void {
    const searchValue = inputField.value.toLowerCase()
    inputField.value = ''
    const searchResult = data.filter(element => element.name.toLowerCase().includes(searchValue))
    
    while(searchResultList.firstChild) {
        searchResultList.removeChild(searchResultList.firstChild)
    }

    if (searchResult.length === 0) {
        alert('Your search did not find any results')
    }
    else {
        const resultLimit = Math.min(10, searchResult.length)
        for (let i = 0; i < resultLimit; i++) {
            const li = document.createElement('li')
            const button = document.createElement('button')
            button.classList.add('input-button')
            button.classList.add('see-more-button')
            button.classList.add('beer-name')
            button.textContent = searchResult[i].name
            li.appendChild(button)
            searchResultList.appendChild(li)
        }
    }

}

function seeMore(data, beerName): void {
    const beer = data.find(beer => beer.name === beerName)
    console.log(beerName)
    console.log(beer)
    beerImages.forEach(element => {
        element.src = beer.image_url
    })
    beerNames.forEach(element => {
        element.textContent = beer.name
    })
    description.textContent = `Description: ${beer.description}`
    aBV.textContent = `Alcohol by volume: ${beer.abv}\n`
    volume.textContent = `Volume: ${beer.volume.value} ${beer.volume.unit}\n`
    ingredients.textContent = `Ingredients: Malt: ${beer.ingredients.malt[0].name}\n Hops: ${beer.ingredients.hops[0].name}\n`
    foodPairing.textContent = `Food Pairing: ${beer.food_pairing}\n`
    brewersTips.textContent = `Brewer's tips: ${beer.brewers_tips}\n`
}