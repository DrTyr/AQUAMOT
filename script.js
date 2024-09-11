document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const buttonGrid = document.querySelector('.button-grid');

  menuToggle.addEventListener('click', function() {
    if (buttonGrid.style.display === 'none' || buttonGrid.style.display === '') {
      buttonGrid.style.display = 'grid';
    } else {
      buttonGrid.style.display = 'none';
    }
  });
});
