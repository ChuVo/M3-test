(function() {
  const box = document.querySelector('.slider__container'),
        marker1 = document.getElementById('marker1'),
        marker2 = document.getElementById('marker2');

  let chusPoint = () => {
      marker1.classList.toggle('marker__point_active');
      marker2.classList.toggle('marker__point_active');
    };

  setInterval( () => {
    staping1();
  },10000);

  function staping1() {

    if (box.style.transform = "translateX(0px)") {
      box.style.transform = "translateX(-100vw)";
      chusPoint();
    } else {
      box.style.transform = "translateX(0px)";
    }    

    setTimeout( () => {
      box.style.transform = "translateX(0px)";
      chusPoint();
    },5000);
  }
})();