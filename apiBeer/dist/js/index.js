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
const beerImage = document.getElementById('beer-image');
const beerName = document.getElementById('beer-name');
const seeMoreButton = document.getElementById('see-more-button');
const homeButton = document.getElementById('home-button');
const searchMenuButton = document.getElementById('search-menu-button');
const cardSection = document.getElementById('card-section');
const searchSection = document.getElementById('search-section');
const inputField = document.querySelector('.input-field');
const inputButton = document.querySelector('.input-button');
const searchResultList = document.querySelector('.search-result-list');
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
    console.log(randomBeer);
    beerImage.src = randomBeer.image_url;
    beerName.innerHTML = randomBeer.name;
    seeMoreButton.style.display = 'inline';
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
            button.textContent = searchResult[i].name;
            li.appendChild(button);
            searchResultList.appendChild(li);
        }
    }
}
