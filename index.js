(function() {
  'use strict';

  const SPEEDS = ['stop', 'slow', 'go'];

  for (let speed of SPEEDS) {
    let btn = document.querySelector(`#${speed}Button`);
    let light = document.querySelector(`#${speed}Light`);
    btn.addEventListener('click', () => {
      light.classList.toggle(speed);
    });
    btn.addEventListener('mouseover', () => {
      console.log(`Entered ${speed} button`);
    });
    btn.addEventListener('mouseout', () => {
      console.log(`Left ${speed} button`);
    });
  }
})();
