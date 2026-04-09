const colorPicker = document.querySelector('#color-picker');
const fontSelect = document.querySelector('#font-select');
const themeToggle = document.querySelector('#theme-toggle');
const articleColorPicker = document.querySelector('#article-color-picker');
const body = document.querySelector('#body');
const newsArticles = document.querySelectorAll('.news')



// carrega as preferencias do usuario armazenadas no localStorage
// @function loadPreferences


const loadPreferences = () => {
    // cor

};


colorPicker.addEventListener('input', (e) => {
    const color = e.target.value; // capturar o movimento do mouse
    //mudar o valor da variavel no css, com o valor capturado
    document.documentElement.style.setProperty('--primary-color', color);
    // inserir a chave (primaryColor) e o valor (color) no local storage
    localStorage.setItem('primaryColor', color);
});


articleColorPicker.addEventListener('input', (e) =>{

});


fontSelect.addEventListener('change', (e) => {

});


themeToggle.addEventListener('click', () => {

});