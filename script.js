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


// dark mode switch
//dark/light mode
function switchModeDark() {
  if (document.body.classList == "") {
    document.body.classList.add("dark");
  } else {document.body.classList.replace("light", "dark");
} 
  localStorage.setItem("theme","dark");
}


// light mode switch
function switchModeLight() {
  if (document.body.classList == "") {
    document.body.classList.add("light");
  } else {document.body.classList.replace("dark", "light");
} 
  localStorage.setItem("theme","light");
}

// local storage for dark/light preference
if (localStorage.getItem("theme") == "dark") {
document.body.classList.add("dark");
} else {document.body.classList.add("light");
};


// //array practice
// const finApps = ["Oracle", " OneStream", " Anaplan", " Profix"];


// function changeArray() {
//   if (finApps[0] == "Hyperion") {
//     finApps[0] = "Oracle";
//     console.log(finApps[0]);
//     document.getElementById("demo").innerHTML = finApps;
//   } else if (finApps[0] == "Oracle") {
//     finApps[0] = "Hyperion";
//     console.log(finApps[0]);
//     document.getElementById("demo").innerHTML = finApps;
//   }
// }

// document.getElementById("demo").innerHTML = finApps

// finApps[0] = "Hyperion";

// console.log(finApps);

// console.log(finApps[1]);

// console.log(finApps[2]);

// for (const apps of finApps) {
//   console.log(apps)
// }


// //array.prototype.splice


// const basicArray = ["hello", "yes", "okay", "nice"]

// const yikes = "yup"
// const wowAdd = "kiwi"
// // splice = 1st parameter display which is the entry, 2nd is how many to remove, third+ are ones to add.
// basicArray.splice(0,2, yikes, wowAdd);

// console.log(basicArray);


// //array.prototype.map

// const array2 = [
//   { key: 1, value: 10 },
//   { key: 2, value: 20 },
//   { key: 3, value: 30 },
// ];

// const mapArray2 = array2.map(({key, value}) => ({ [key]: value}));

// console.log(mapArray2);
// console.log(array2);






