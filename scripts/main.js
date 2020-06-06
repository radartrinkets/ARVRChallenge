var boxEl = document.querySelector('a-sphere');
  boxEl.addEventListener('mouseenter', function () {
    boxEl.setAttribute('scale', {x: 2, y: 2, z: 2});
  });