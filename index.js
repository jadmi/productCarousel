document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider-container ul"); // now the actual scrollable element
  const listItems = slider.querySelectorAll("li");
  const leftButton = document.querySelector(".prev");
  const rightButton = document.querySelector(".next");

  leftButton.disabled = true;

  function clickRight() {
    const itemWidth = listItems[0].offsetWidth + 16;
    const maxScrollLeft = slider.scrollWidth - slider.clientWidth;

    slider.scrollLeft += itemWidth;

    if (slider.scrollLeft + itemWidth * 0.1 > maxScrollLeft) {
      rightButton.disabled = true;
    }
  }

  function clickLeft() {
    const itemWidth = listItems[0].offsetWidth + 16;
    slider.scrollLeft -= itemWidth;

    rightButton.disabled = false;

    if (slider.scrollLeft <= 0) {
      leftButton.disabled = true;
    } else {
      leftButton.disabled = false;
    }
  }

  slider.addEventListener("scroll", function () {
    const itemWidth = listItems[0].offsetWidth + 16;
    const maxScrollLeft = slider.scrollWidth - slider.clientWidth;

    rightButton.disabled = slider.scrollLeft + itemWidth * 0.1 >= maxScrollLeft;
    leftButton.disabled = slider.scrollLeft <= 0;
  });

  rightButton.addEventListener("click", clickRight);
  leftButton.addEventListener("click", clickLeft);
});
