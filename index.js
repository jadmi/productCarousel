const slider = document.querySelector(".slider-container ul");
const sliderContainer = document.querySelector(".slider-container");
const listItems = slider.querySelectorAll("li");
const leftButton = document.querySelector(".prev");
const rightButton = document.querySelector(".next");
const firstItem = listItems[0];
const lastItem = listItems[listItems.length - 1];
const gapValue = Math.round(
  (slider.scrollWidth - firstItem.clientWidth) / (listItems.length - 1) -
    firstItem.clientWidth
);
const observer = new IntersectionObserver(observeCallback, {
  root: sliderContainer,
  threshold: 0.9,
});

leftButton.disabled = true;
rightButton.addEventListener("click", handleSliderNavigation);
leftButton.addEventListener("click", handleSliderNavigation);

listItems.forEach((card) => {
  card.addEventListener("click", onCardClick);
});

observer.observe(firstItem);
observer.observe(lastItem);

function onCardClick(e) {
  const link = e.currentTarget.querySelector("a");
  if (link) {
    location = link;
  }
}

function handleSliderNavigation(e) {
  const itemWidth = firstItem.offsetWidth + gapValue;
  if (e.target === rightButton) {
    slider.scrollLeft += itemWidth;
  } else {
    slider.scrollLeft -= itemWidth;
  }
}

function observeCallback(entries) {
  entries.forEach((entry) => {
    if (entry.target === firstItem) {
      leftButton.disabled = entry.isIntersecting;
    }

    if (entry.target === lastItem) {
      rightButton.disabled = entry.isIntersecting;
    }
  });
}
// TODO: remove floating numbers
// TODO: functies lostrekken
// TODO: handle duplicate code
// TODO: replace scroll event with intersection observer
