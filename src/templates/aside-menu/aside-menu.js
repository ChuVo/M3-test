(function closeAsideMenu() {

  const asideMenu = document.querySelector('.menu__label'),
        menuItem = document.querySelectorAll( '.navigation__item'),
        chekMenu = document.getElementById('menu__check');

  scroll();

  document.body.addEventListener( 'click', (e) => {    
    
    if (chekMenu.checked) {

      if (e.target === asideMenu || e.target === chekMenu) {
        
      } else {
        chekMenu.checked = false;
      }
    }
  });

  let w = screen.width;
  
  if (w < 972) {
    menuItem.forEach( (i) => {

      i.addEventListener( 'click', () => {
        chekMenu.checked = false;
      });
    });
  };

  //Фугнкция отвечает за плавную прокрутку до якарей, к которым привязаны ссылки
  function scroll() {
    const $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 400);

        return false;
    });      
  };

}());