var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const beerURL = 'https://api.punkapi.com/v2/beers?page=2&per_page=80';
const randomButton = document.getElementById('random-button');
const beerCard = document.querySelector('card');
const beerImages = document.querySelectorAll('.beer-image');
const beerNames = document.querySelectorAll('.beer-name');
const seeMoreButton = document.querySelectorAll('.see-more-button');
const homeButton = document.getElementById('home-button');
const searchMenuButton = document.getElementById('search-menu-button');
const cardSection = document.getElementById('card-section');
const searchSection = document.getElementById('search-section');
const inputField = document.querySelector('.input-field');
const inputButton = document.querySelector('.input-button');
const searchResultList = document.querySelector('.search-result-list');
const mainSeeMoreButton = document.querySelector('#card-section > article > button.button.see-more-button');
const description = document.querySelector('.description');
const aBV = document.querySelector('.abv');
const volume = document.querySelector('.volume');
const ingredients = document.querySelector('.ingredients');
const hops = document.querySelector('.hops');
const foodPairing = document.querySelector('.food-pairing');
const brewersTips = document.querySelector('.brewers-tips');
function getBeer() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(beerURL);
            if (response.status === 200) {
                const data = yield response.json();
                randomButton.addEventListener('click', function (event) {
                    randomBeer(data);
                });
                inputButton.addEventListener('click', function (event) {
                    searchBeer(data);
                });
                seeMoreButton.forEach(button => {
                    addEventListener('click', function (event) {
                        const target = event.target;
                        const card = target.closest('.card');
                        if (card) {
                            const beerNameElement = card.querySelector('.beer-name');
                            if (beerNameElement) {
                                const beerName = beerNameElement.textContent;
                                seeMore(data, beerName);
                            }
                        }
                    });
                });
            }
            else {
                throw Error('Something went wrong, try again later');
            }
        }
        catch (error) {
            console.log(error);
        }
    });
}
function randomBeer(data) {
    const randomBeer = data[Math.floor(Math.random() * data.length)];
    beerImages.forEach(element => {
        element.src = randomBeer.image_url;
    });
    beerNames.forEach(element => {
        element.innerHTML = randomBeer.name;
    });
    mainSeeMoreButton.style.display = 'inline';
}
getBeer();
searchMenuButton.addEventListener('click', function (event) {
    cardSection.style.display = 'none';
    searchSection.style.display = 'flex';
});
function searchBeer(data) {
    const searchValue = inputField.value.toLowerCase();
    inputField.value = '';
    const searchResult = data.filter(element => element.name.toLowerCase().includes(searchValue));
    while (searchResultList.firstChild) {
        searchResultList.removeChild(searchResultList.firstChild);
    }
    if (searchResult.length === 0) {
        alert('Your search did not find any results');
    }
    else {
        const resultLimit = Math.min(10, searchResult.length);
        for (let i = 0; i < resultLimit; i++) {
            const li = document.createElement('li');
            const button = document.createElement('button');
            button.classList.add('input-button');
            button.classList.add('see-more-button');
            button.classList.add('beer-name');
            button.textContent = searchResult[i].name;
            li.appendChild(button);
            searchResultList.appendChild(li);
        }
    }
}
function seeMore(data, beerName) {
    const beer = data.find(beer => beer.name === beerName);
    console.log(beerName);
    console.log(beer);
    beerImages.forEach(element => {
        element.src = beer.image_url;
    });
    beerNames.forEach(element => {
        element.textContent = beer.name;
    });
    description.textContent = `Description: ${beer.description}`;
    aBV.textContent = `Alcohol by volume: ${beer.abv}\n`;
    volume.textContent = `Volume: ${beer.volume.value} ${beer.volume.unit}\n`;
    ingredients.textContent = `Ingredients: Malt: ${beer.ingredients.malt[0].name}\n Hops:${beer.ingredients.hops[0].name}\n`;
    foodPairing.textContent = `Food Pairing: ${beer.food_pairing}\n`;
    brewersTips.textContent = `Brewer's tips: ${beer.brewers_tips}\n`;
}
