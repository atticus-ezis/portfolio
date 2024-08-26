document.querySelector('.drop-in-button').addEventListener('click', function(scroll) {
    scroll.preventDefault(); // Prevent the default anchor behavior
    document.querySelector('#intro').scrollIntoView({ 
      behavior: 'smooth' 
    });
  });