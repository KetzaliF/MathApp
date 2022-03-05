const iconSun = document.querySelector('.theme__sun');
const iconMoon = document.querySelector('.theme__moon');

document.querySelector(".theme").addEventListener("click", () => {
   if (document.body.classList.contains('dark')) {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
      
      iconMoon.style.display = 'initial';
      iconSun.style.display = 'none';

      localStorage.setItem("theme", "light");
   } else {
      document.body.classList.remove('light');
      document.body.classList.add('dark');

      iconMoon.style.display = 'none';
      iconSun.style.display = 'initial';

      localStorage.setItem("theme", "dark");
   }
})

const saveTheme = () =>{
   if(localStorage.getItem('theme') === 'dark'){
      document.body.classList.remove('light');
      document.body.classList.add('dark');

      iconMoon.style.display = 'none';
      iconSun.style.display = 'initial';
   }else{
      document.body.classList.remove('dark');
      document.body.classList.add('light');

      iconMoon.style.display = 'initial';
      iconSun.style.display = 'none';
   }
}

saveTheme();