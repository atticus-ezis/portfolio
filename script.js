// document.querySelector('.drop-in-button').addEventListener('click', function(scroll) {
//     scroll.preventDefault(); // Prevent the default anchor behavior
//     document.querySelector('#intro').scrollIntoView({ 
//       behavior: 'smooth' 
//     });
//   });

//   document.addEventListener('DOMContentLoaded', function() {
//     var projectElement = document.querySelector('.track#projects');
  
//     if (projectElement) {
//       projectElement.addEventListener('click', function(scroll) {
//         console.log('click is a go')
//         scroll.preventDefault();
//         document.querySelector('#projects').scrollIntoView({
//             behavior:'smooth'
//         });

  
        
//       });
//     } else {
//       console.log('Element with ID "projects" not found!');
//     }
//   });

//   document.querySelector('.track #projects').addEventListener('click', function(scroll) {
//     scroll.preventDefault();
//     var target = document.querySelector('#projects');
//     var headerOffset = document.querySelector('.menu-header').offsetHeight;
//     var elementPosition = target.getBoundingClientRect().top;
//     var offsetPosition = elementPosition + window.scrollY - headerOffset;

//     window.scrollTo({
//         top: offsetPosition,
//         behavior: 'smooth'
//     });
// });