//////////////////////////
// LIBRARIES INIT CODE //
////////////////////////
document.addEventListener("DOMContentLoaded", function(param) {
  // ----- AOS Initialization ----- //
  AOS.init();
});

// ----- Projects Slider ----- //
jQuery('.rd-projects-slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
          slidesToShow: 2,
          slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
          slidesToShow: 1,
          slidesToScroll: 1
      }
    }
  ]
});

/////////////////////
// CUSTOM JS CODE //
///////////////////
document.addEventListener("DOMContentLoaded", function() {
  // ----- Box Shadow to header on scroll ----- //
  const header = document.querySelector('.rd-web-header-section');
  window.addEventListener('scroll', function() {
    if (window.scrollY === 0) {
      header.style.boxShadow = 'none';
    } else {
      header.style.boxShadow = '0 3px 10px 0 #666';
    }
  })

  ///----- Hamburger ----- //
  const navbar = document.querySelector('.navbar-mobile');
  const hamburgerSection = document.querySelector('.hamburger-section');
  const hamburger = document.querySelector('.hamburger');
  const closeButton = document.querySelector('.close-button');
  const navItems = document.querySelectorAll('.navbar-mobile a');

  // Initiation
  navbar.style.left = '-85%';
  closeButton.style.display = 'none';

  // Click Event
  hamburgerSection.addEventListener('click', hamburgerOpener);

  // Close when clicked outside and open when clicked on a Menu item
  document.addEventListener('click', function(click) {
    if (!navbar.contains(click.target) && !hamburgerSection.contains(click.target)) {
      hamburgerr();
    }
    navItems.forEach((navItem) => {
      console.log(navItem);
      if (navItem.contains(click.target)) {
        setTimeout(() => {
          hamburgerr();
        }, 800);
      }
    })
  })
  // Hamburger Opening Function
  function hamburgerOpener() {
    navbar.style.left = navbar.style.left === '-85%' ? '-0px' : '-85%';
    hamburger.style.display = hamburger.style.display === 'none' ? 'block' : 'none';
    closeButton.style.display = closeButton.style.display === 'none' ? 'block' : 'none';
  }
  function hamburgerr() {
    navbar.style.left = '-85%';
    closeButton.style.display = 'none';
    hamburger.style.display = 'block';
  }

  
  // ----- Floating Button (Hire) ----- //  
  const hireFloatingButton = document.querySelector('.hire');
  setInterval(() => {
    if (hireFloatingButton.classList.contains('animated')) {
      hireFloatingButton.classList.remove('animated');
    } else {
      hireFloatingButton.classList.add('animated');
    }
  }, 2000);

});

// ----- Particles Effect ----- //
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 100,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#854fee"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

// ----- Lazy Load ----- //
document.addEventListener("DOMContentLoaded", function() {
  const lazySVGs = document.querySelectorAll('.lazy-svg');

  const svgObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const svg = entry.target;
          if (entry.isIntersecting) {
              const src = svg.getAttribute('data-src');
              svg.src = `${src}?v=${new Date().getTime()}`; // ${src} is data-scr's value and ?v is query string and ${new Date().getTime()} is time elaped since the year 1970 and it connects tother to form an URL. 
              console.log(svg.src);
          } else {
            svg.src = '';
          }
      });
  });

  lazySVGs.forEach(svg => {
      svgObserver.observe(svg);
  });
});
  
// ----- Mouse following style ----- //
document.addEventListener('mousemove', (event) => {
  const cursorDot = document.querySelector('.cursor-dot');
  const cursorCircle = document.querySelector('.cursor-circle');

  // Update cursor position
  requestAnimationFrame(() => {
    cursorDot.style.left = `${event.clientX}px`;
    cursorDot.style.top = `${event.clientY}px`;

    cursorCircle.style.left = `${event.clientX}px`;
    cursorCircle.style.top = `${event.clientY}px`;
  });
});
document.addEventListener('mouseover', (event) => {
  const cursorCircle = document.querySelector('.cursor-circle');

  // Check if the target is a link or a button with an href
  if (event.target.tagName === 'A' || (event.target.tagName === 'BUTTON' && event.target.hasAttribute('href'))) {
    cursorCircle.classList.add('enlarge');
  }
});  
document.addEventListener('mouseout', (event) => {
  const cursorCircle = document.querySelector('.cursor-circle');

  // Check if the target was a link or a button with an href
  if (event.target.tagName === 'A' || (event.target.tagName === 'BUTTON' && event.target.hasAttribute('href'))) {
    cursorCircle.classList.remove('enlarge');
  }
});