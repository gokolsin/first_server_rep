const copyArr = ['telegramm', 'youtube', 'tiktok', 'tgk'];

copyArr.forEach(el => {
    el = document.getElementById(el)

    el.addEventListener('click', () => {
        let text = el.innerText;
        try {
            navigator.clipboard.writeText(text);
        } catch (err) {
            console.log('Ошибка при копировании: ', err);
        }
    });
})