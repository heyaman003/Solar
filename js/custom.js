// page Load Jquery




gsap.registerPlugin(ScrollTrigger);
AOS.init({
  duration: 800,
  once: true
});
Splitting();




// function Particle( x, y, radius ) {
//   this.init( x, y, radius );
// }

// Particle.prototype = {

//   init: function( x, y, radius ) {

//     this.alive = true;

//     this.radius = radius || 10;
//     this.wander = 0.15;
//     this.theta = random( TWO_PI );
//     this.drag = 0.92;
//     this.color = '#fff';

//     this.x = x || 0.0;
//     this.y = y || 0.0;

//     this.vx = 0.0;
//     this.vy = 0.0;
//   },

//   move: function() {

//     this.x += this.vx;
//     this.y += this.vy;

//     this.vx *= this.drag;
//     this.vy *= this.drag;

//     this.theta += random( -0.5, 0.5 ) * this.wander;
//     this.vx += sin( this.theta ) * 0.1;
//     this.vy += cos( this.theta ) * 0.1;

//     this.radius *= 0.96;
//     this.alive = this.radius > 0.5;
//   },

//   draw: function( ctx ) {

//     ctx.beginPath();
//     ctx.arc( this.x, this.y, this.radius, 0, TWO_PI );
//     ctx.fillStyle = this.color;
//     ctx.fill();
//   }
// };





var prevScrollpos = window.pageYOffset;
var navHeight = $('.header').height();

$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  //>=, not <=
  if (scroll >= navHeight + 30) {
    $(".header").addClass("scrollUp");
  } else {
    $(".header").removeClass("scrollUp");
  }
});

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = - navHeight - 5 + "px";
  }
  prevScrollpos = currentScrollPos;
}

// home slider
var swiper = new Swiper(".home-swiper", {
  grabCursor: true,
  // effect: 'coverflow',
  effect: 'fade',
  crossFade: true,
  speed: 1200,
  slideShadows: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 500,
    modifier: 1,
    slideShadows: true,
    scale: 0.5,
  },
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  // pagination: {
  //   el: '.pagi-home',
  //   clickable: true,
  // },
  // navigation: {
  //   nextEl: '.home-next',
  //   prevEl: '.home-prev',
  // },
});

// number swiper
var swiper = new Swiper(".number-swiper", {
  slidesPerView: 2,
  spaceBetween: 20,
  grabCursor: true,
  speed: 1500,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".slide-button-next",
    prevEl: ".slide-button-prev",
  },
  scrollbar: {
    el: ".number-scrollbar",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

var swiper = new Swiper(".dispatch-swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  grabCursor: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".slide-button-next",
    prevEl: ".slide-button-prev",
  },
  scrollbar: {
    el: ".number-scrollbar",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

var swiper = new Swiper(".about-swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 4,
    slideShadows: true
  },
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  keyboard: {
    enabled: true
  },
  mousewheel: {
    thresholdDelta: 70
  },
  breakpoints: {
    560: {
      slidesPerView: 2.5
    },
    768: {
      slidesPerView: 3
    },
    1024: {
      slidesPerView: 3
    }
  }
});

var counted = 0;
$(window).scroll(function () {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.count').each(function () {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
        countNum: countTo
      },

        {

          duration: 2000,
          easing: 'swing',
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    counted = 1;
  }

});


var swiper = new Swiper(".people-swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  grabCursor: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  navigation: {
    nextEl: ".slide-button-next",
    prevEl: ".slide-button-prev",
  },
  scrollbar: {
    el: ".number-scrollbar",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

var swiper = new Swiper(".awards-swiper", {
  // direction: 'vertical',
  // mousewheelControl: true,
  // slidesPerView: 1,
  spaceBetween: 20,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});




var swiper = new Swiper(".news-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  scrollbar: {
    el: ".number-scrollbar",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

var swiper = new Swiper(".investor-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  scrollbar: {
    el: ".number-scrollbar",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

var swiper = new Swiper(".media-swiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  scrollbar: {
    el: ".number-scrollbar",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});


// Preloader
(function ($) {

  //mySplitText = new splitText(".splittext", {type:"words,chars"});
  gsap.set(".splittext", { perspective: 400 });
  //chars = mySplitText.chars;


  var perfData = window.performance.timing,
    EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
    time = parseInt((EstimatedTime / 1000) % 60, 10) * 100;

  var PercentageID = $("#percentage"),
    LoaderID = $("#loading-bar span"),
    revealID = $("#logo-overlay"),
    start = 0,
    end = 100,
    duration = time;
  animateValue(PercentageID, LoaderID, revealID, start, end, duration);

  function animateValue(id, lid, rid, start, end, duration) {
    var range = end - start,
      current = start,
      increment = end > start ? 1 : -1,
      stepTime = Math.abs(Math.floor(duration / range)),
      obj = $(id);
    objLoader = $(lid);
    objReveal = $(rid);

    var timer = setInterval(function () {
      current += increment;
      $(obj).text(Math.floor(current / 4));
      $(objLoader).css("width", current + "%");
      $(objReveal).css("top", -current + "px");

      if (current == end) {
        clearInterval(timer);

        gsap.from('.giant-text', {
          duration: 0.5,
          opacity: 0,
          y: 30,
          delay: 1.5
        });
        gsap.from('.img-girl', {
          duration: 0.8,
          opacity: 0,
          x: -30,
          delay: 2
        });

        gsap.from('#standing', {
          duration: 0.5,
          opacity: 0,
          delay: 2
        });

        gsap.from('.banner-logo', {
          duration: 0.5,
          opacity: 0,
          y: -30,
          delay: 3
        });

        gsap.from('.red-box', {
          duration: 1.2,
          opacity: 0,
          y: 80,
          ease: "back",
          delay: 2
        }
        );





        // gsap intro
        // gsap.from('.navbar-brand',{opacity:0, y: 30,duration: 0.5, delay: 1.5});
        // gsap.from('.navbar-nav>li', {opacity:0, y: 30, ease: "power3.out", duration: 0.8, delay: 1.5, stagger: 0.1});
        // gsap.from("#banner-intro", {opacity:0, y: 30, ease: "back", duration: 1, delay: 2});

      }
    }, stepTime);
  }

  setInterval(function () {
    $("body").addClass("page-loaded");
  }, time);


})(jQuery);







// gsap.to('#footerLogoBig', {
//   scrollTrigger: {
//     trigger: '#footer',
//     start:'top center',
//     end:'top center',
//     //markers: true,
//     scrub: 1
//   },
//   y: 200
// });












//Show more and less
$(".show-more").click(function () {
  if ($(".text").hasClass("show-more-height")) {
    $(this).text("...Show Less");
  } else {
    $(this).text("...Show More");
  }

  $(".text").toggleClass("show-more-height");
});


// SVG DRAW JS START***********

let wrapper = document.querySelector('.svg-draw-wrapper');
let paths = document.querySelectorAll('.stroke-path');

// Function to calculate path lengths
function calculatePathLengths() {
    paths.forEach(path => {
        let pathLength = path.getTotalLength();
        path.style.strokeDasharray = pathLength + ' ' + pathLength;
        path.style.strokeDashoffset = pathLength;
    });
}

// Recalculate path lengths when the window is loaded or resized
window.addEventListener('load', calculatePathLengths);
window.addEventListener('resize', calculatePathLengths);

// Update stroke dash offset on scroll
window.addEventListener("scroll", (e) => {
    paths.forEach(path => {
        let scrollPercentage = (document.documentElement.scrollTop + wrapper.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
        let drawLength = path.getTotalLength() * scrollPercentage * 3.5;
        path.style.strokeDashoffset = path.getTotalLength() - drawLength;

        if (scrollPercentage >= 0.99) {
            path.style.strokeDasharray = 'none';
        } else {
            path.style.strokeDasharray = path.getTotalLength() + ' ' + path.getTotalLength();
        }
    });
});

// SVG DRAW JS END***********



// SVG DRAW 2 JS START***********
window.addEventListener('scroll', function() {
  const svg = document.querySelector('.stroke-path2');
  const pathLength = svg.getTotalLength();
  
  // Calculate scroll percentage, ensuring it's between 0 and 1
  let scrollPercentage = window.scrollY / (document.body.scrollHeight - window.innerHeight);
  scrollPercentage = Math.min(Math.max(scrollPercentage, 0), 1);
  
  // Adjust the speed factor as needed (higher value for faster drawing)
  const speedFactor = 9;
  const drawLength = pathLength * scrollPercentage * speedFactor;

  svg.style.strokeDasharray = pathLength;
  svg.style.strokeDashoffset = pathLength - drawLength;
});

// SVG DRAW 2 JS END***********




// Twincle JS Start*********
// Number of stars
const numStars = 150;

// Create stars
for (let i = 0; i < numStars; i++) {
    createStar();
}

// Function to create a star
function createStar() {
    // Create a star element
    const star = document.createElement('div');
    star.classList.add('star');

    // Random position
    const x = Math.random() * 100 + '%';
    const y = Math.random() * 100 + '%';
    star.style.left = x;
    star.style.top = y;

    // Append the star to the container
    document.getElementById('starContainer').appendChild(star);
}


// Twincle JS End***********


// Chakra Video Play - Pause JS Start************
  let options = {
     root: null,
     rootMargin: '0px',
     threshold: 0.5,
  };
  let callback = (entries , observer) => {
    entries.forEach(entry => {
      if(entry.target.id == 'chakraCompVideo'){
        if(entry.isIntersecting){
          entry.target.play();
          console.log("****Video is playing*****");
        }
        else{
          entry.target.pause();
          console.log("****Video is paused*****");

        }
      }
  });
  }
  let observer = new IntersectionObserver(callback , options);
  observer.observe(document.querySelector('#chakraCompVideo')); 
// Chakra Video Play - Pause JS JS End***********


// ****************************************
// Script for Product Pages Start
// ****************************************
let nextBtn = document.querySelector('.next')
let prevBtn = document.querySelector('.prev')

let slider = document.querySelector('.slider')
let sliderList = slider.querySelector('.slider .list')
let thumbnail = document.querySelector('.slider .thumbnail')
let thumbnailItems = thumbnail.querySelectorAll('.item')

thumbnail.appendChild(thumbnailItems[0])

// Function for next button 
nextBtn.onclick = function() {
    moveSlider('next')
    console.log("i have been clicked");
}


// Function for prev button 
prevBtn.onclick = function() {
    moveSlider('prev')
}


function moveSlider(direction) {
    let sliderItems = sliderList.querySelectorAll('.item')
    let thumbnailItems = document.querySelectorAll('.thumbnail .item')
    
    if(direction === 'next'){
        sliderList.appendChild(sliderItems[0])
        thumbnail.appendChild(thumbnailItems[0])
        slider.classList.add('next')
    } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1])
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1])
        slider.classList.add('prev')
    }


    slider.addEventListener('animationend', function() {
        if(direction === 'next'){
            slider.classList.remove('next')
        } else {
            slider.classList.remove('prev')
        }
    }, {once: true}) // Remove the event listener after it's triggered once
}

let link = document.querySelector(".link");
let pink = document.querySelector(".color");

let hoverTL = gsap.timeline();
hoverTL.pause();

// from, to, fromTo Tweens
hoverTL.to(pink, {
  width: "calc(100% + 1.3em)",
  ease: "Elastic.easeOut(0.25)",
  duration: 0.4
});
hoverTL.to(pink, {
  width: "2em",
  left: "calc(100% - 1.45em)",
  ease: "Elastic.easeOut(0.4)",
  duration: 0.6
});

link.addEventListener("mouseenter", () => {
  hoverTL.play();
});

link.addEventListener("mouseleave", () => {
  hoverTL.reverse();
});

let tl = gsap.timeline({ease:'power1.in'})
 let __SplitText = new SplitText("#text", {type:"words,chars"})
 let clicked = false
let chars = __SplitText.chars


document.querySelector('#button').addEventListener('click',()=>{
  if(clicked === false){
    clicked = true
    tl.to(chars, {duration: 0.5,opacity:0, scale:0, y:80, rotationX:180, transformOrigin:"0% 50% -50",   stagger: 0.1,repeat:0})
  tl.to('#button',{width:'50px',duration:0.5})
  tl.to('#w',{y:'0%',duration:0.5})

    
    
    
  }
  else if(clicked === true){
    clicked = false
      tl.to('#w',{y:'100%',duration:0.5})
      tl.to('#button',{width:'135px',duration:0.5})
tl.to(chars, {duration: 0.5, opacity:1, scale:1, y:0, rotationX:0, transformOrigin:"0% 50% -50", stagger: 0.1,repeat:0})
  }



})

document.getElementById('card1').addEventListener('click', function () {
  this.classList.toggle('expanded');
});

// ****************************************
// Script for Product Pages End
// ****************************************