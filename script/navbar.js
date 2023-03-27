const toggleStickyClass = 'is-sticky';
const dropdownBtn = document.getElementById('services');
const navbar = document.getElementById('navbar');
const stickyNavbar = document.getElementsByClassName('navbar-sticky')[0];
const chevron = document.getElementsByClassName('chevron')[0];
const dropdownList = document.getElementsByClassName('dropdown-list')[0];
dropdownBtn.addEventListener('click', () => {
  dropdownList.classList.toggle('navbar-animation');
  dropdownList.classList.toggle('navbar-animation');
  dropdownList.classList.toggle('display-block');
  chevron.classList.toggle('rotate180');
});

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 100) {
    stickyNavbar.classList.add('is-sticky');
  } else {
    stickyNavbar.classList.remove(toggleStickyClass);
  }
});

window.addEventListener('resize', function () {
  addRequiredClass();
});

function addRequiredClass() {
  if (navbar.offsetWidth < 860) {
    document.body.classList.add('mobile');
  } else {
    document.body.classList.remove('mobile');
  }
}

window.onload = addRequiredClass;

let hamburger = document.querySelector('.hamburger');
let mobileNav = document.querySelector('.nav-list');

let bars = document.querySelectorAll('.hamburger span');

let isActive = false;

hamburger.addEventListener('click', function () {
  mobileNav.classList.toggle('open');
  if (!isActive) {
    bars[0].style.transform = 'rotate(45deg)';
    hamburger.style.boxShadow = '0 0 15px 1px rgba(0, 0, 0, 0.2)';
    hamburger.style.backgroundColor = '#ffffff';
    document.body.style.overflow = 'hidden';
    bars[1].style.opacity = '0';
    bars[2].style.transform = 'rotate(-45deg)';
    isActive = true;
  } else {
    bars[0].style.transform = 'rotate(0deg)';
    bars[1].style.opacity = '1';
    hamburger.style.boxShadow = '';
    hamburger.style.backgroundColor = '';
    bars[2].style.transform = 'rotate(0deg)';
    document.body.style.overflow = 'auto';
    isActive = false;
  }
});
