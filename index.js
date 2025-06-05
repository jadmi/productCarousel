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
rightButton.addEventListener("click", clickRight);
leftButton.addEventListener("click", clickLeft);
listItems.forEach((card) => {
  card.addEventListener("click", onCardClick);
});

function onCardClick(e) {
  const link = e.currentTarget.querySelector("a");
  if (link) {
    location = link.href;
  }
}

function onScroll() {
  const itemWidth = listItems[0].offsetWidth + gapValue;
  const maxScrollLeft = slider.scrollWidth - slider.clientWidth;

  rightButton.disabled =
    slider.scrollLeft + itemWidth * extraScrollSpace >= maxScrollLeft;
  leftButton.disabled = slider.scrollLeft <= 0;
}

function clickRight() {
  const itemWidth = listItems[0].offsetWidth + gapValue;
  const maxScrollLeft = slider.scrollWidth - slider.clientWidth;

  slider.scrollLeft += itemWidth;

  if (slider.scrollLeft + itemWidth * extraScrollSpace > maxScrollLeft) {
    rightButton.disabled = true;
  }
}

function clickLeft() {
  const itemWidth = listItems[0].offsetWidth + gapValue;
  slider.scrollLeft -= itemWidth;

  rightButton.disabled = false;
  leftButton.disabled = slider.scrollLeft <= 0;
}

function navigation() {
  const itemWidth = listItems[0].offsetWidth + gapValue;
  const maxScrollLeft = slider.scrollWidth - slider.clientWidth;

  slider.scrollLeft += itemWidth;

  if (slider.scrollLeft + itemWidth * extraScrollSpace > maxScrollLeft) {
    rightButton.disabled = true;
  } else {
    slider.scrollLeft -= itemWidth;
    rightButton.disabled = false;
    leftButton.disabled = slider.scrollLeft <= 0;
  }
}

// TODO: remove floating numbers
// TODO: functies lostrekken
// TODO: handle duplicate code
// TODO: replace scroll event with intersection observer
