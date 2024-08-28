// intro text-card animation


const intro_hover_element = document.querySelector('.intro-container')
const display_text = document.querySelector('.intro-card')
const skillbar = document.querySelector('.skillbar img')

intro_hover_element.addEventListener('mouseenter', function(){
    display_text.style.opacity = '1'; 
    display_text.style.left = '20%';
    skillbar.style.top = '20%';
    skillbar.style.opacity = '1';
});

intro_hover_element.addEventListener('mouseleave', function(){
    display_text.style.opacity = '0';
    display_text.style.left = '0%';
    skillbar.style.top = '0%';
    skillbar.style.opacity = '0';

});

// project card animation


// const card_hover = document.querySelectorAll('.project-icon')
// const card_reveal = document.querySelectorAll('.card-type')

// card_hover.forEach((icon, index) => icon.addEventListener('mouseenter', function(){
//     card_reveal[index].style.top = '100%';
// }));

// card_hover.forEach((icon, index) => icon.addEventListener('mouseleave', function(){
//     card_reveal[index].style.top = '-60%';
// }));



