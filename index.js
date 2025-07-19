const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".nav-list ul");
const menuItem = document.querySelectorAll(".nav-list ul li a");
const header = document.querySelector(".header.container");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});

// The classList property allows you to interact with the classes of an HTML element.
menuItem.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  });
});

// after hero
document.addEventListener("scroll", () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 250) {
    header.style.backgroundColor = "#29323c";
  } else {
    header.style.backgroundColor = "transparent";
  }
});


const copyButton = document.querySelector('.copy-button');
const codeBlock = document.getElementById('code-block');

copyButton.addEventListener('click', () => {
  const textToCopy = codeBlock.innerText;

  navigator.clipboard.writeText(textToCopy).then(() => {
    // Optional: Change button text or show a message
    copyButton.innerText = 'Copied!';
    setTimeout(() => {
      copyButton.innerText = 'Copy';
    }, 2000);
  }).catch(err => {
    console.error('Failed to copy text: ', err);
  });
});
