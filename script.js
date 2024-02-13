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


//array practice
const finApps = ["Oracle", " OneStream", "C#", ".net"];


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

// const removeFromArray = function(x, ...args) {
//   const result = [];
//   x.forEach((element) => {
//       if (args.includes(element) == false) {
//       result.push(element);
//       }
//   }) 
  
//   return result;
//   };

// console.log(removeFromArray([1, 2, 3, 4],3, 2));



const leapYears = function(year) {
  const leap = year % 4;
  const leap2 = year % 100;
  const leap3 = year % 400;
  const leap4 = year % 2;
  console.log(leap);
  console.log(leap2);
  console.log(leap3);
  if (leap4 !== 0) {
    return false;
  } else if ((leap === 0) && ((leap2 === 0) && (leap3 !==0))) {
     return false;
    } else {
      return true;
     } 
  };

  console.log(leapYears(1000));
  




