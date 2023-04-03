const faceButton = document.querySelector('#fb-btn');
faceButton.addEventListener('click', () => {
  window.open('https://www.facebook.com', '_blank');
});

const emailButton = document.querySelector("#email-btn");
emailButton.addEventListener('click', () => {
  window.location = "mailto:hisweetie@sweetcommerce.com";
});