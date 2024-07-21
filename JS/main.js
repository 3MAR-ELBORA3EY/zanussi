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
    if (window.innerWidth < 750) {
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
