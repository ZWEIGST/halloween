// Task 3.5 - После загрузки страницы (DOMContentLoaded) показать поскорее пользователю, что что-то происходит, и не выходит за пределы экрана пользователя
document.addEventListener('DOMContentLoaded', function () {
  const app = document.querySelector('.app');
  const appImgHalloween = document.createElement('img');
  appImgHalloween.src = 'https://media.istockphoto.com/photos/front-view-of-halloween-themed-setting-against-the-window-in-day-time-picture-id1270707211?b=1&k=20&m=1270707211&s=170667a&w=0&h=m1vGFKp-P7Jyyv_zFUWPWEgAM-jSLqyqJXHoMZCUPig=';
  console.log("appImgHalloween");
  appImgHalloween.classList.add('appImgHalloween');
  app.appendChild(appImgHalloween);

  // Preloader
window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);
}
})
