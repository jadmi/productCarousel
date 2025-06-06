const slider = document.querySelector(".slider-container ul");
const listItems = slider.querySelectorAll("li");
const leftButton = document.querySelector(".prev");
const rightButton = document.querySelector(".next");
const gapValue = Math.round(
  (slider.scrollWidth - listItems[0].clientWidth) / (listItems.length - 1) -
    listItems[0].clientWidth
);

const extraScrollSpace = 0.1; // 10% item width extra space to scroll

leftButton.disabled = true;
slider.addEventListener("scroll", onScroll);
rightButton.addEventListener("click", () => handleSliderNavigation("right"));
leftButton.addEventListener("click", () => handleSliderNavigation("left"));

listItems.forEach((card) => {
  card.addEventListener("click", onCardClick);
});

function onCardClick(e) {
  const link = e.currentTarget.querySelector("a");
  if (link) {
    location = link;
  }
}

function handleSliderNavigation(direction) {
  const itemWidth = listItems[0].offsetWidth + gapValue;
  const maxScrollLeft = slider.scrollWidth - slider.clientWidth;

  if (direction === "right") {
    slider.scrollLeft += itemWidth;

    if (slider.scrollLeft + itemWidth * extraScrollSpace > maxScrollLeft) {
      rightButton.disabled = true;
    }
    leftButton.disabled = false;
  }

  if (direction === "left") {
    slider.scrollLeft -= itemWidth;

    rightButton.disabled = false;
    leftButton.disabled = slider.scrollLeft <= 0;
  }
}

// TODO: remove floating numbers
// TODO: functies lostrekken
// TODO: handle duplicate code
// TODO: replace scroll event with intersection observer
