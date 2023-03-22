function navigation(slider) {
  let wrapper, arrowLeft, arrowRight;

  function markup(remove) {
    wrapperMarkup(remove);
    arrowMarkup(remove);
  }

  function removeElement(elment) {
    elment.parentNode.removeChild(elment);
  }
  function createDiv(className) {
    var div = document.createElement('div');
    var classNames = className.split(' ');
    classNames.forEach((name) => div.classList.add(name));
    return div;
  }

  function arrowMarkup(remove) {
    if (remove) {
      removeElement(arrowLeft);
      removeElement(arrowRight);
      return;
    }
    arrowLeft = createDiv('arrow arrow--left');
    arrowLeft.addEventListener('click', () => slider.prev());
    arrowRight = createDiv('arrow arrow--right');
    arrowRight.addEventListener('click', () => slider.next());

    wrapper.appendChild(arrowLeft);
    wrapper.appendChild(arrowRight);
  }

  function wrapperMarkup(remove) {
    if (remove) {
      var parent = wrapper.parentNode;
      while (wrapper.firstChild)
        parent.insertBefore(wrapper.firstChild, wrapper);
      removeElement(wrapper);
      return;
    }
    wrapper = createDiv('navigation-wrapper');
    slider.container.parentNode.appendChild(wrapper);
    wrapper.appendChild(slider.container);
  }

  function updateClasses() {
    var slide = slider.track.details.rel;
    slide === 0
      ? arrowLeft.classList.add('arrow--disabled')
      : arrowLeft.classList.remove('arrow--disabled');
    slide === slider.track.details.slides.length - 1
      ? arrowRight.classList.add('arrow--disabled')
      : arrowRight.classList.remove('arrow--disabled');
  }

  slider.on('created', () => {
    markup();
    updateClasses();
  });
  slider.on('optionsChanged', () => {
    updateClasses();
  });
  slider.on('slideChanged', () => {
    updateClasses();
  });
  slider.on('destroyed', () => {
    markup(true);
  });
}

new KeenSlider(
  '#work-slider',
  {
    breakpoints: {
      '(min-width: 480px)': {
        slides: { perView: 1, spacing: 5 },
      },
      '(min-width: 768px)': {
        slides: { perView: 2, spacing: 10 },
      },
      '(min-width: 980px)': {
        slides: { perView: 4, spacing: 10 },
      },
    },
  },
  [navigation]
);
new KeenSlider(
  '#partner-slider',
  {
    loop: true,
    breakpoints: {
      '(min-width: 480px)': {
        slides: { perView: 1, spacing: 5 },
      },
      '(min-width: 768px)': {
        slides: { perView: 2, spacing: 10 },
      },
      '(min-width: 980px)': {
        slides: { perView: 3, spacing: 10 },
      },
    },
  },
  [navigation]
);
new KeenSlider(
  '#service-slider',
  {
    loop: true,
    breakpoints: {
      '(min-width: 480px)': {
        slides: { perView: 1, spacing: 5 },
      },
      '(min-width: 768px)': {
        slides: { perView: 2, spacing: 10 },
      },
      '(min-width: 980px)': {
        slides: { perView: 3, spacing: 10 },
      },
    },
  },
  [navigation]
);
