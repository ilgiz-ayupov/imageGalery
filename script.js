class Galery {
  constructor(sliderSelector, slidesSelector) {
    this.$slider = document.querySelector(sliderSelector);
    this.$slides = this.$slider.querySelectorAll(slidesSelector);

    this.$slider.addEventListener("click", (e) => this.onClick(e));
  }

  onClick(event) {
    const slidesClass = this.$slides[0].classList[0];
    const $target = event.target.parentElement;
    if ($target.classList.contains(slidesClass)) {
      this.removeAllActive();
      this.addActive($target);
    }
  }

  addActive(el) {
    el.classList.add("active");
  }

  removeAllActive() {
    this.$slides.forEach((slide) => slide.classList.remove("active"));
  }
}

const galery = new Galery(".slider", ".slide");
