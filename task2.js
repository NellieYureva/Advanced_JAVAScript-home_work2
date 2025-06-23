// Задание 2
// Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.

// Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.

// Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.

// При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.

document.querySelector('.submit-button').addEventListener('click', function() {  
    const reviewInput = document.querySelector('.review-input');  
    const reviewsList = document.querySelector('.reviews-list');  
    const popUpElement = document.getElementById("pop-up");

    try{
        const review = reviewInput.value.trim();
        if (review.length < 10 || review.length > 500) {  
            throw new Error('Отзыв не может быть менее 50 или более 500 символов');                  
        }  else {
            const newReview = document.createElement('li');  
            newReview.textContent = review;  
            reviewsList.appendChild(newReview);  
            reviewInput.value = ''; // Очищаем поле ввода
        }
    }catch(error){
        console.log ('Отзыв не может быть менее 50 или более 500 символов');
    }           
});  
