(function() {

var el = document.getElementById('button'),
    valueEl = document.getElementById('value');

var touch = null;

el.addEventListener('touchstart', onTouchStart, false);
el.addEventListener('touchmove', onTouchMove, false);
el.addEventListener('touchend', onTouchEnd, false);

function onTouchStart(e) {
  e.preventDefault();
  checkForce(e);
}

function onTouchMove(e) {
  e.preventDefault();
  checkForce(e);
}

function onTouchEnd(e) {
  e.preventDefault();
  touch = null;
}

function checkForce(e) {
  touch = e.touches[0];
  setTimeout(refreshForceValue.bind(touch), 10);
}

function refreshForceValue() {
  var touchEvent = this;
  var forceValue = 0;
  if(touchEvent) {
    forceValue = touchEvent.force || 0;
    setTimeout(refreshForceValue.bind(touch), 10);
  }else{
    forceValue = 0;
  }

  renderElement(forceValue);
}

function renderElement(forceValue) {
  el.style.webkitTransform = 'scale(' + (1 + forceValue * 1.5) + ')';

  if (forceValue === 1) {
    el.classList.add('popped');
  } else {
    el.classList.remove('popped');
  }

  valueEl.innerHTML = forceValue;
}

})();
