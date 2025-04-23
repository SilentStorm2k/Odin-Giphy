import '../css/styles.css';
import defaultImage from '../assets/defaultImage.png';
import { getGifUrl } from './api';

const img = document.querySelector('img') as HTMLImageElement;
const errorSpan = document.querySelector('span') as HTMLSpanElement;
const searchButton = document.querySelector('button') as HTMLButtonElement;
const searchInput = document.querySelector('input') as HTMLInputElement;

searchButton.addEventListener('click', () => showImage(searchInput.value));
searchInput.addEventListener('keypress', (e) => {
    if (e.key == 'Enter') showImage(searchInput.value);
});

async function showImage(searchTopic: string) {
    getGifUrl(searchTopic)
        .then((url) => {
            img.src = url;
            errorSpan.textContent = '';
            errorSpan.classList.remove('active');
        })
        .catch((errorMessage) => {
            console.log(errorMessage);
            img.src = defaultImage;
            errorSpan.textContent = errorMessage;
            errorSpan.classList.add('active');
        });
}

showImage('cats');
