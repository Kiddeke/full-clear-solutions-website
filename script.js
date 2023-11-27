// JavaScript File (script.js)

// Animate the header logo on page load
const headerLogo = document.querySelector('.headerlogo');
headerLogo.style.opacity = 0;
headerLogo.style.transform = 'translateX(-50px)';
headerLogo.style.transition = 'opacity 1s, transform 1s';
setTimeout(() => {
  headerLogo.style.opacity = 1;
  headerLogo.style.transform = 'translateX(0)';
}, 500);

function switchModeDark() {
  if (document.body.classList == "") {
    document.body.classList.add("dark");
  } else {document.body.classList.replace("light", "dark");
} 
  localStorage.setItem("theme","dark");
}

function switchModeLight() {
  if (document.body.classList == "") {
    document.body.classList.add("light");
  } else {document.body.classList.replace("dark", "light");
} 
  localStorage.setItem("theme","light");
}


if (localStorage.getItem("theme") == "dark") {
document.body.classList.add("dark");
} else {document.body.classList.add("light");
};



