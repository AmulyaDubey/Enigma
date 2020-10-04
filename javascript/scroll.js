const rightArrow = document.getElementById('right');
const leftArrow = document.getElementById('left');

var id;


rightArrow.addEventListener('mouseenter', e => {
  id = setInterval(frame, 10);
  function frame() {
    window.scrollBy(2,0)
  }
});

leftArrow.addEventListener('mouseenter', e => {
  id = setInterval(frame, 10);
  function frame() {
    window.scrollBy(-2,0)
  }
});

rightArrow.addEventListener('mouseleave', e => {
  clearInterval(id);
});

leftArrow.addEventListener('mouseleave', e => {
  clearInterval(id);
});

rightArrow.addEventListener('click', e => {
  id = setInterval(frame, 10);
  function frame() {
    window.scrollBy(2,0)
  }
});



