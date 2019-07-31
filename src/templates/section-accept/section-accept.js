(function() {

  const button = document.getElementById('send-button'),
        result = document.querySelector('.send-result'),
        imagesOfFunction = document.querySelectorAll('.grid__img-wrap'),
        send = document.querySelector('.send');
  let myEmail = document.getElementById('email');
  
  
  button.addEventListener('click', () => {
    validateEmail(myEmail);
  });

  function validateEmail(i) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    result.classList.add('send-result_visible');
    if (i.value === "") {
      
      result.innerHTML = 'Укажите свою почту';
    } else {
      if (!re.test(i.value)) {
        result.innerHTML = 'Упс! Кажется Вы ошиблись при вводе...';
      } else {
        result.innerHTML = 'Прекрасно!';
        send.classList.add('send__visible');
      }
    }
  
    setTimeout( () => {
        result.classList.remove('send-result_visible');

        if (send.classList.contains('send__visible')) {
          send.classList.remove('send__visible');
        }
      },2000);

    return re.test(i);//вывает адрес для дальнейшей обработки
  }


  imagesOfFunction.forEach((e) => {
    e.addEventListener('mouseenter', scaleAdd);
    e.addEventListener('mouseleave', scaleRemove);
  });
  
  function scaleAdd(e) {
    e.target.firstElementChild.classList.add('grid__pic_scale');
  }

  function scaleRemove(e) {
    e.target.firstElementChild.classList.remove('grid__pic_scale');
  }

}());