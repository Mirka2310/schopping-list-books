import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import * as basicLightbox from 'basiclightbox';
import Swiper from 'swiper';
import 'swiper/css';
import axios from 'axios';

document.addEventListener('DOMContentLoaded', function () {
  const shoppingListTitle = document.querySelector('.shopinglist-title-item');

  // обробник подій "click"
  shoppingListTitle.addEventListener('click', function () {
    // Відкриття нової сторінки
    window.location.href =
      'https://books-backend.p.goit.global/books/category-list';
  });
});