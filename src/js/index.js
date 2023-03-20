function clickHeaderBttn(id) {
  if (!id.includes('bttn')) return;
  let link = document.createElement("a");
  link.setAttribute('href', `#${id}-path`);
  link.id = `${id}-link`;
  document.querySelector('body').append(link);
  link.click();
  link = document.getElementById(`${id}-link`);
  link.remove();
};

const bttn_container = document.getElementById('main-header__button-container');
bttn_container.addEventListener("click", (event) => {
  clickHeaderBttn(event.target.id);
});

