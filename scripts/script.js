const copyArr = ['telegramm', 'youtube', 'tiktok', 'tgk'];

copyArr.forEach(el => {
    el = document.getElementById(el)

    el.addEventListener('click', () => {
        let text = el.innerText;
        try {
            navigator.clipboard.writeText(text);
        } catch (err) {
            console.error('Ошибка при копировании: ', err);
        }
    });
})