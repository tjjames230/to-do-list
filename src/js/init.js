export { init };

function init() {
  loadHomeUI();
}

function loadHomeUI() {
  const main = document.querySelector("main");
  main.innerHTML = `<h1 style="font-weight: 700">Hello</h1>`;
}
