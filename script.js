const leftTabs = document.querySelector('.left-tabs');
const rightTabs = document.querySelector('.right-tabs');

document.addEventListener('mousemove', (e) => {
  if (e.clientX < 50) {
    leftTabs.style.transform = 'translateX(0)';
  } else {
    leftTabs.style.transform = 'translateX(-100%)';
  }

  if (e.clientX > window.innerWidth - 50) {
    rightTabs.style.transform = 'translateX(0)';
  } else {
    rightTabs.style.transform = 'translateX(100%)';
  }
});
