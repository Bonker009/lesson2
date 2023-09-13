const initApp = () => {
  const hamburgerBtn = document.getElementById("hambuger-button");
  const mobileMeni = document.getElementById("mobile-menu");
  const toggleMenu = () => {
    mobileMeni.classList.toggle("hidden");
    mobileMeni.classList.toggle("flex");
  };
  hamburgerBtn.addEventListener("click", toggleMenu);
  mobileMeni.addEventListener("click", toggleMenu);
};
document.addEventListener("DOMContentLoaded", initApp);
