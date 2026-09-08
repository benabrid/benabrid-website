const fontsMenuButton = document.getElementById("fontsMenuButton");
const fontsMegaMenu = document.getElementById("fontsMegaMenu");

function setMegaMenu(open) {
  fontsMegaMenu.classList.toggle("is-open", open);
  fontsMenuButton.classList.toggle("is-active", open);
  fontsMenuButton.setAttribute("aria-expanded", String(open));
  fontsMegaMenu.setAttribute("aria-hidden", String(!open));
}

fontsMenuButton.addEventListener("click", (event) => {
  event.stopPropagation();
  setMegaMenu(!fontsMegaMenu.classList.contains("is-open"));
});

fontsMegaMenu.addEventListener("click", (event) => event.stopPropagation());
document.addEventListener("click", () => setMegaMenu(false));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMegaMenu(false);
});
