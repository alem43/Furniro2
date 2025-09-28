import "./styles/home.scss";
import "./styles/shop.scss";
import "./styles/style.scss";

window.addEventListener("load", () => {
  const loader = document.getElementById("site-loader");
  if (!loader) return;
  setTimeout(() => {
    loader.classList.add("hidden");
    setTimeout(() => loader.remove(), 400);
  }, 200);
});
