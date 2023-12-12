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


//dark/light mode
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


//store preferred mode

if (localStorage.getItem("theme") == "dark") {
document.body.classList.add("dark");
} else {document.body.classList.add("light");
};


//array practice


const cats = ["Oracle", " OneStream", " Anaplan", " Profix"];

for (const cat of cats) {
  console.log(cat);
}

function changeArray() {
  if (cats[0] == "Hyperion") {
    cats[0] = "Oracle";
    console.log(cats[0]);
    document.getElementById("demo").innerHTML = cats;
  } else if (cats[0] == "Oracle") {
    cats[0] = "Hyperion";
    console.log(cats[0]);
    document.getElementById("demo").innerHTML = cats;
  }
}

document.getElementById("demo").innerHTML = cats

cats[0] = "Hyperion";

console.log(cats);

console.log(cats[1]);


