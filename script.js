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
    const savedColor = localStorage.getItem('primaryColor');
    if (savedColor) {
        document.documentElement.style.setProperty('--primary-color', savedColor);
        colorPicker.value = savedColor;
    }

    // cor dos artigos
    const savedArticleColor = localStorage.getItem('articleColor');
    if (savedArticleColor) {

    }

    // fonte
    const savedFont = localStorage.getItem('fontFamily');
    if (savedFont) {
        
    }


    // tema
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark');
        themeToggle.innerHTML = '<span class="material-icons">light_mode</span>';
    }
};


colorPicker.addEventListener('input', (e) => {
    const color = e.target.value; // capturar o movimento do mouse
    //mudar o valor da variavel no css, com o valor capturado
    document.documentElement.style.setProperty('--primary-color', color);
    // inserir a chave (primaryColor) e o valor (color) no local storage
    localStorage.setItem('primaryColor', color);
});


articleColorPicker.addEventListener('input', (e) =>{
    const color = e.target.value;
    newsArticles.forEach(article => {
        article.style.backgroundColor = color;
    });
    
    localStorage.setItem('articleColor', color)

});


fontSelect.addEventListener('change', (e) => {
    const font = e.target.value;
    document.documentElement.style.setProperty('--font-family', font);
    localStorage.setItem('fontFamily', font);
});


themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');

    const isDark = body.classList.contains('dark');
    themeToggle.innerHTML = isDark
        ? '<span class="material-icons">light_mode</span>'
        : '<span class="material-icons">dark_mode</span>';

    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

loadPreferences();