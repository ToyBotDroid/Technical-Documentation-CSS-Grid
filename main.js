const button = document.querySelector('.darkMode-btn');
const img = document.querySelectorAll('.img');

button.addEventListener('click', () => {
  darkMode();
  toggleTextDarkMode();
  // button.textContent = "Light Mode";
});

function darkMode(){
  document.documentElement.classList.toggle('darkMode-html');
  // img.classList.toggle('darkMode-img-vid')
  // for(let i = 0; i < img.length; i += 1) {
  //   img.item(i).classList.toggle("darkMode-img-vid");

  document.querySelectorAll('.img').forEach((item) => {
    item.classList.toggle("darkMode-img-vid");
  })
}

function toggleTextDarkMode(){
  if(button.textContent != "Light Mode" ){
    button.textContent = "Light Mode";
  }else{
    button.textContent = "Dark Mode";
  }
  
}

document.querySelector('.emoji').addEventListener('click', () => {
  scrollTo(0,0)
})












// https://forum.freecodecamp.org/t/cannot-read-property-toggle-of-undefined/412133