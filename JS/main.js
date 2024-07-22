header();

function header() {
  let menuBtn = document.querySelector("header .menu");
  let mobilenav = document.querySelector("header nav.mobile");
  let closeBtn = () => {
    if (mobilenav) {
      return mobilenav.querySelector("li:first-child");
    }
  };

  window.addEventListener("resize", () => {
    toggleScreen();
  });

  toggleScreen();
  function toggleScreen() {
    let nav = document.querySelector("header nav");
    if (window.innerWidth < 1000) {
      nav.classList.remove("desktop");
      nav.classList.add("mobile");
    } else {
      nav.classList.remove("mobile");
      nav.classList.add("desktop");
    }
  }

  closeOpenNav();
  function closeOpenNav() {
    if (menuBtn) {
      menuBtn.addEventListener("click", () => {
        if (mobilenav) {
          mobilenav.style.display = "grid";
        }
        if (closeBtn()) {
          closeBtn().addEventListener("click", () => {
            if (mobilenav) {
              mobilenav.style.display = "none";
            }
          });
        }
      });
    }
  }
}

if (window.innerWidth < 750) {
  FAQS();
}
let currentWidth = window.innerWidth;

window.addEventListener("resize", () => {
  if (window.innerWidth != currentWidth) {
    if (window.innerWidth < 750) {
      FAQS();
      currentWidth = window.innerWidth;
    } else {
      let questions = document.querySelectorAll(".faqs .question");
      questions.forEach((e) => {
        e.style.height = "fit-content";
      });
    }
  }
});
function FAQS() {
  let questions = document.querySelectorAll(".faqs .question");
  questions.forEach((e) => {
    let ask = e.querySelector(".ask");
    let askHeight = ask.offsetHeight;
    let answer = e.querySelector(".answer");
    let answerHeight = answer.scrollHeight;
    e.style.height = `${askHeight - 1}px`;
    ask.onclick = () => {
      if (e.classList.contains("drobed")) {
        e.style.height = `${askHeight - 1}px`;
        e.classList.remove("drobed");
      } else {
        questions.forEach((q) => {
          let ask = q.querySelector(".ask");
          let askHeight = ask.offsetHeight;
          q.style.height = `${askHeight - 1}px`;
          q.classList.remove("drobed");
        });
        e.style.height = `${answerHeight + askHeight}px`;
        e.classList.add("drobed");
      }
    };
  });
}
