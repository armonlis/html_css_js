const slider = document.getElementById('main-slider');

function clickHandler(event) {
  function changeImg(num) {
    const img = document.getElementById('main-slider-image');
    img.setAttribute('src', `/src/public/col-slides/slide${('000' + num).slice(-4)}.png`);
  };
  const maxImg = 7;                                                                                                      //max amount of galerie's images
  const {id} = event.target;
  let curImg = +document.getElementById('main-slider-image').getAttribute('src').slice(-8, -4);
  if (id !== 'main-slider-left-bttn' && id !== 'main-slider-right-bttn') return
  if (id === 'main-slider-right-bttn') {
    curImg += curImg < maxImg ? 1 : -maxImg + 1;
    changeImg(curImg);
  }
  if (id === 'main-slider-left-bttn') {
    curImg -= curImg !== 1 ? 1 : -maxImg + 1;
    changeImg(curImg);
  }
};

slider.addEventListener("click", clickHandler);