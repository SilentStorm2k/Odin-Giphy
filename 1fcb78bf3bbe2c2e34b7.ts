var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import '../css/styles.css';
import defaultImage from '../assets/defaultImage.png';
import { getGifUrl } from './api';
const img = document.querySelector('img');
const errorSpan = document.querySelector('span');
const searchButton = document.querySelector('button');
const searchInput = document.querySelector('input');
searchButton.addEventListener('click', () => showImage(searchInput.value));
searchInput.addEventListener('keypress', (e) => {
    if (e.key == 'Enter')
        showImage(searchInput.value);
});
function showImage(searchTopic) {
    return __awaiter(this, void 0, void 0, function* () {
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
    });
}
showImage('cats');
