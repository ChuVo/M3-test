(function() {
  const pulseBox = document.querySelector('.pulse'),
        widthBox = pulseBox.offsetWidth;

  console.log(widthBox);
  pulseBox.style.height = pulseBox.offsetWidth + "px";

}());