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
const beerImage = document.getElementById('beer-image') as HTMLImageElement
const beerName = document.getElementById('beer-name') as HTMLElement
const seeMoreButton = document.getElementById('see-more-button') as HTMLElement
const homeButton = document.getElementById('home-button') as HTMLElement
const searchMenuButton = document.getElementById('search-menu-button') as HTMLElement
const cardSection = document.getElementById('card-section') as HTMLElement
const searchSection = document.getElementById('search-section') as HTMLElement
const inputField = document.querySelector('.input-field') as HTMLInputElement
const inputButton = document.querySelector('.input-button') as HTMLElement
const searchResultList = document.querySelector('.search-result-list') as HTMLElement


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
    console.log(randomBeer)
    beerImage.src = randomBeer.image_url
    beerName.innerHTML = randomBeer.name
    seeMoreButton.style.display = 'inline'
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
            button.textContent = searchResult[i].name
            li.appendChild(button)
            searchResultList.appendChild(li)
        }
    }

}