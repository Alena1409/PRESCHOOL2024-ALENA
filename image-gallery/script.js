// let url = "https://api.unsplash.com/photos/?per_page=9&query&client_id=9KxCKS9lk1xG7TZbO7UOot9q-2g_q3dMTf8mFKYBar4" `https://api.unsplash.com/photos?fit=crop&w=200&h=200&per_page=9&client_id=9KxCKS9lk1xG7TZbO7UOot9q-2g_q3dMTf8mFKYBar4`;
document.addEventListener("DOMContentLoaded", function () {

    const gallery = document.querySelector('.gallery');
    const input = document.querySelector('.input');
    const btn = document.querySelector('.btn');
    const clearBtn = document.querySelector('.clear-btn');

    //при открытии приложения курсор находится в поле ввода +5
    input.focus();

    async function getImages(query = '') {
        const url = query
            ? `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&orientation=landscape&per_page=12&extras=url_m&tag_mode=all&client_id=9KxCKS9lk1xG7TZbO7UOot9q-2g_q3dMTf8mFKYBar4`
            : `https://api.unsplash.com/photos?per_page=12&extras=url_m&client_id=9KxCKS9lk1xG7TZbO7UOot9q-2g_q3dMTf8mFKYBar4`;

        gallery.innerHTML = '';

        const res = await fetch(url);
        const data = await res.json();

        // если по запросу не были найдены изображения
        if (query && data.results.length === 0) {
            const message = document.createElement('p');
            message.textContent = 'Не нашли фото по вашему запросу, напишите на английском языке';
            gallery.append(message);
            return;
        }

        const images = query ? data.results : data; // Если есть запрос, берем results, иначе - все изображения

        images.forEach(image => {
            const img = document.createElement("img");
            img.classList.add("gallery-img");
            img.src = image.urls.regular;
            img.alt = image.alt_description || 'image';
            gallery.append(img);
        });
    }
    // по умолчанию выгружаю
    getImages();

    function startSearch() {
        const query = input.value.trim(); // Получаем значение и удаляем лишние пробелы
        if (query) {
            getImages(query);
        } else {
            getImages();
        }

    }

    btn.addEventListener('click', startSearch);
    input.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Отменяем стандартное поведение
            startSearch();
        }
    });

    // Очистка поля ввода при нажатии на крестик
    clearBtn.addEventListener('click', function () {
        input.value = ''; // Очищаем поле ввода
        input.focus(); // Возвращаем фокус на поле ввода
        getImages(); // Обновляем галерею (если нужно)
    });

});
