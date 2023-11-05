const navBar = document.querySelector("nav"),
      menuBtns = document.querySelectorAll(".menu-icon"),
      overlay = document.querySelector(".overlay");
        
menuBtns.forEach(menuBtn => {
  menuBtn.addEventListener("click", () => {
      navBar.classList.toggle("open")
  })
})

overlay.addEventListener("click", () => {
  navBar.classList.remove("open")
})
// POPUP
let popupBg = document.querySelector('.popup__bg');
let popup = document.querySelector('.popup');
let openPopupButtons = document.querySelectorAll('.card');
let closePopupButton = document.querySelector('.close-popup');

openPopupButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    popupBg.classList.add('active');
  })
})

closePopupButton.addEventListener('click',() => {
  popupBg.classList.remove('active');
});

document.addEventListener('click',(e) => {
  if(e.target === popupBg) {
    popupBg.classList.remove('active');
  }
});