document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider-container");
  const articles = slider.querySelectorAll("article");
  const leftButton = document.querySelector(".prev");
  const rightButton = document.querySelector(".next");
  leftButton.disabled = true;

  function clickRight() {
    const itemWidth = slider.scrollWidth / slider.childElementCount;
    const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
    slider.scrollLeft += itemWidth;

    console.log("current scroll left:", slider.scrollLeft);

    if (slider.scrollLeft + itemWidth * 0.1 > maxScrollLeft) {
      // Disable the button
      console.info("Disable the button");
      rightButton.disabled = true;
    }
    setTimeout(() => console.log("new scroll left:", slider.scrollLeft), 300);
    console.log("max scroll left: ", slider.scrollWidth - slider.clientWidth);
  }

  function clickLeft() {
    slider.scrollLeft -= slider.scrollWidth / slider.childElementCount;
    rightButton.disabled = false;
    // console.log(slider.scrollWidth);
    if (slider.scrollLeft <= 0) {
      console.info("Disable the button");
      leftButton.disabled = true;
    } else {
      leftButton.disabled = false;
    }
  }

  slider.addEventListener("scroll", function () {
    const itemWidth = slider.scrollWidth / slider.childElementCount;
    const maxScrollLeft = slider.scrollWidth - slider.clientWidth;

    if (slider.scrollLeft + itemWidth * 0.1 >= maxScrollLeft) {
      rightButton.disabled = true;
    } else {
      rightButton.disabled = false;
    }

    if (slider.scrollLeft <= 0) {
      leftButton.disabled = true;
    } else {
      leftButton.disabled = false;
    }
  });

  rightButton.addEventListener("click", clickRight);
  leftButton.addEventListener("click", clickLeft);
});

// temp0.scrollWidth - temp0.clientWidth
// temp0.scrollWidth - temp0.childElementcount[0]
