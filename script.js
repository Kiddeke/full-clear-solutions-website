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

// Animate the overview section elements on scroll
const overviewElements = document.querySelectorAll('.overview > *');
overviewElements.forEach(element => {
  element.style.opacity = 0;
  element.style.transform = 'translateY(50px)';
  element.style.transition = 'opacity 1s, transform 1s';
});

window.addEventListener('scroll', () => {
  const scrollPosition = window.innerHeight - 100;
  overviewElements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    if (elementPosition < scrollPosition) {
      element.style.opacity = 1;
      element.style.transform = 'translateY(0)';
    }
  });
});

// Animate the quote section on hover
const quoteSection = document.querySelector('.quote');
quoteSection.addEventListener('mouseover', () => {
  quoteSection.style.backgroundColor = '#f9faf8';
  quoteSection.style.color = '#125125';
});
quoteSection.addEventListener('mouseout', () => {
  quoteSection.style.backgroundColor = '#e5e7eb';
  quoteSection.style.color = '#1f2937';
});

// Animate the signup button on click
const signupButton = document.querySelector('.signupbottom');
signupButton.addEventListener('click', () => {
  signupButton.style.backgroundColor = '#125125';
  signupButton.style.color = '#f9faf8';
  setTimeout(() => {
    signupButton.style.backgroundColor = '#0d4021';
    signupButton.style.color = '#f9faf8';
  }, 500);
});