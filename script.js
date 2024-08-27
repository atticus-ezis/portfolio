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



