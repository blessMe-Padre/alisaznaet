import { initNav } from "./module/nav.js";
import { initSlider } from "./module/sliders.js";

window.addEventListener('DOMContentLoaded', () => {
    console.log('подключен скрипт main.js');

    initNav();
    initSlider();
    baguetteBox.run('.gallery-wrapper');

    // DOMContentLoaded
});
