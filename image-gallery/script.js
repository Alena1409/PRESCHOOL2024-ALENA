// let url = "https://api.unsplash.com/photos/?per_page=9&query&client_id=9KxCKS9lk1xG7TZbO7UOot9q-2g_q3dMTf8mFKYBar4"
const gallery = document.querySelector('.gallery');
const input = document.querySelector('.input');
const btn = document.querySelector('.btn');

async function getImages(query = '') {
    const url = query 
        ? `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=9&orientation=squarish&w=200&h=200&client_id=9KxCKS9lk1xG7TZbO7UOot9q-2g_q3dMTf8mFKYBar4`
        : `https://api.unsplash.com/photos?fit=crop&w=200&h=200&per_page=9&client_id=9KxCKS9lk1xG7TZbO7UOot9q-2g_q3dMTf8mFKYBar4`;

    gallery.innerHTML = '';
    
    try {
        const res = await fetch(url);
        
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        
        const data = await res.json();

        // Проверяем, есть ли результаты
        if (query && data.results.length === 0) {
            const message = document.createElement('p');
            message.textContent = 'No images found.';
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
    } catch (error) {
        console.error('Error fetching images:', error);
    }
}

// по умолчанию выгружаю
getImages();

// Добавляем обработчик события для кнопки
btn.addEventListener('click', () => {
    const query = input.value.trim(); // Получаем значение и удаляем лишние пробелы
    if (query) {
        getImages(query);
    } else {
        // Если пустой запрос
        getImages();
    }
});


