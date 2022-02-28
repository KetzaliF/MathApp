const icon = document.querySelector('.icon-theme');

document.querySelector(".theme").addEventListener("click", () => {
   if (document.body.classList.contains('dark')) {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
      icon.src = '../assets/dark-mood.png';
      localStorage.setItem("theme", "light");
   } else {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
      icon.src = '../assets/light-mood.png';
      localStorage.setItem("theme", "dark");
   }
})

const saveTheme = () =>{
   if(localStorage.getItem('theme') === 'dark'){
      document.body.classList.remove('light');
      document.body.classList.add('dark');
      icon.src = '../assets/light-mood.png';
   }else{
      document.body.classList.remove('dark');
      document.body.classList.add('light');
      icon.src = '../assets/dark-mood.png';
   }
}

saveTheme();