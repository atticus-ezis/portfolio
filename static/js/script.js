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

// social contact name slides
 
const icon_hover = document.querySelectorAll(".icon-hover")
const social_text = document.querySelectorAll(".social-text")

icon_hover.forEach((icon, index) => {
    icon.addEventListener('mouseenter', function() {
        social_text[index].style.transform = "translateX(0%)"
    });
    icon.addEventListener('mouseleave', function(){
        social_text[index].style.transform = 'translateX(-100%)'
    })
})