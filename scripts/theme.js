
document.querySelector(".theme").addEventListener("click", () => {
   document.querySelector(".theme__moon"). classList.toggle("animate-moon");
   document.querySelector(".theme__sun").classList.toggle("animate-sun");
   if (document.querySelector(".theme__moon"). classList.contains("animate-moon")) {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
   } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
   }
})
