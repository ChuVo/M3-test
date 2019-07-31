//Функция отвечает за появление мониторов с примерами работ, при открытии секции с примерами
(function() {
  
  const oferList = document.querySelectorAll(".ofer__item"),
        pulse = document.querySelector(".pulse"),
        funcList = document.querySelectorAll(".grid__item");

        
  let isScrolling = false;
 
  window.addEventListener("scroll", throttleScroll, false);
  document.addEventListener("DOMContentLoaded", scrolling, false);

  //определение момента скролинга
  function throttleScroll(e) {
    if (isScrolling === false) {
      window.requestAnimationFrame(function() {
        scrolling(e);
        isScrolling = false;
      });
    }
    isScrolling = true;
  }  

  //выполнение анимации при появлении элемента в этой функции
  function scrolling(e) {
    for (let i = 0; i < oferList.length; i++) {
      let item = oferList[i];

      if (isPartiallyVisible(item)) {
        item.classList.add("slideLeft");
      } else {
        item.classList.remove("slideLeft");
      }
    }

    for (let i = 0; i < funcList.length; i++) {
      let item = funcList[i];

      if (isPartiallyVisible(item)) {
        item.classList.add("slideCideR");
      } else {
        item.classList.remove("slideCideR");
      }
    }

      if (isPartiallyVisible(pulse)) {
        pulse.classList.add("slidePulse");
      } else {
        pulse.classList.remove("slidePulse");
      }
    
  }

  //определение частично видимого элемента
  function isPartiallyVisible(el) {
    const elementBoundary = el.getBoundingClientRect();

    let top = elementBoundary.top,
        bottom = elementBoundary.bottom,
        height = elementBoundary.height;

    return ( (top + height >= 0) && (height + window.innerHeight >= bottom) );
  }

  //определение полностью видимого элемента
  function isFullyVisible(el) {
    const elementBoundary = el.getBoundingClientRect();

    let top = elementBoundary.top,
        bottom = elementBoundary.bottom;

    return ( (top >= 0) && (bottom <= window.innerHeight) );
  }

}());