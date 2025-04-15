const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const navSearch = document.getElementById("nav-search");

navSearch.addEventListener("click", (e) => {
  navSearch.classList.toggle("open");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content div", {
  duration: 1000,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".deals__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".about__card", {
  duration: 1000,
  interval: 500,
  delay: 500,
});

// In HTML, .display-area has the width of 4 cards = 880px. Each card is 200px width and margin set to 10px.
// .display-area has a .cards-wrapper which contains all the cards. .cards-wrapper is set to display flex.
// .display-area has overflow hidden to hide the portion of cards-wrapper which extends beyond the container's width.

const wrapper = document.querySelector(".cards-wrapper");
// console.log(wrapper.clientWidth);

// grab the dots
const dots = document.querySelectorAll(".dot");
// the default active dot num which is array[0]
let activeDotNum = 0;

dots.forEach((dot, idx) => {
  //   number each dot according to array index
  dot.setAttribute("data-num", idx);

  //   add a click event listener to each dot
  dot.addEventListener("click", (e) => {
    let clickedDotNum = e.target.dataset.num;
    // console.log(clickedDotNum);
    //     if the dot clicked is already active, then do nothing
    if (clickedDotNum == activeDotNum) {
      // console.log('active');
      return;
    } else {
      // console.log('not active');
      // shift the wrapper
      let displayArea = wrapper.parentElement.clientWidth;
      // let pixels = -wrapper.clientWidth * clickedDotNum;
      let pixels = -displayArea * clickedDotNum;
      wrapper.style.transform = "translateX(" + pixels + "px)";
      //       remove the active class from the active dot
      dots[activeDotNum].classList.remove("active");
      //       add the active class to the clicked dot
      dots[clickedDotNum].classList.add("active");
      //       now set the active dot number to the clicked dot;
      activeDotNum = clickedDotNum;
    }
  });
});
