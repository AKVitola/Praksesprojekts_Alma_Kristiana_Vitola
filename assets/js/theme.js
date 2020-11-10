
        //====== Play video in an overlay ======
        //============================

const videoImg = document.getElementById("js-video-img");
const video = document.getElementById("js-video");
const pageOverlay = document.getElementById("js-ovelay");
const pageBcground = document.getElementById("js-video-bcground");

if (videoImg !== null) {
  videoImg.addEventListener("click", function() {
    showVideo();
  });
}

if (pageBcground !== null) {
  pageBcground.addEventListener("click", function() {
    hideVideo();
  });
}

function showVideo() {
  pageOverlay.style.display = "block";
  pageBcground.style.display = "block";
  video.style.display = "block";
  playVidDelay(1000);
  video.currentTime = 0;
  stopPageScrolling();
  hideButtonInOverlayMenu();

}

function hideVideo() {
  video.style.display = "none";
  pageOverlay.style.display = "none";
  pageBcground.style.display = "none";
  video.pause();
  startPageScrolling();
  displayGoToTopButton();
}

function playVidDelay(delay) {
  setTimeout(function(){
     video.play();
  }, delay)
}


        // ====== Overlay menu======
        //============================

function transformIcon(menuIcon) {
    menuIcon.classList.toggle("change");
}

function closeMenu() {
  document.getElementById("js-nav").style.height = "0%";
}

function openMenu() {
  document.getElementById("js-nav").style.height = "100%";
}

function toggleMenu() {
  if (document.getElementById("js-nav").style.height !== "100%") {
    openMenu();
    stopPageScrolling();
    hideButtonInOverlayMenu();
  } else {
    closeMenu();
    startPageScrolling();
    displayGoToTopButton();
  }
}

function stopPageScrolling() {
  document.body.style.overflow = "hidden";
}

function startPageScrolling() {
  document.body.style.overflow = "scroll";
}

function hideButtonInOverlayMenu() {
  document.getElementById("js-goToTopButton").style.display = "none";
}


// === Close menu when an list item is clicked on

let liElements = document.getElementById("js-nav").getElementsByTagName("li");
for (let i = 0; i < liElements.length; i++) {
  liElements[i].addEventListener("click", closeMenuOnSelect);
}

function closeMenuOnSelect() {
  if (document.body.offsetWidth <= 1000) {
    closeMenu();
    startPageScrolling();
  }
}

        //====== Go to top button ======
        //==============================


//Display go to top button when scrolled 20 px

goToTopButton = document.getElementById("js-goToTopButton");
window.onscroll = function () {
  displayGoToTopButton();
};

function displayGoToTopButton() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    goToTopButton.style.display = "block";
  } else {
    goToTopButton.style.display = "none";
  }
}

function goToTop() {
  let targetDiv = document.querySelector("#js-pageTop");
  let targetPosition = calculateTargetPos(targetDiv);
  scrollToLocation(targetPosition);
}

function scrollToLocation(targetPosition) {
  window.scrollTo({
    top: targetPosition,
    behavior: "smooth",
  });
}

// Can be used if the header is fixed. Than offset = header height.
//When scrolled to position header dosn't cover the section.

function calculateTargetPos(target, offset = 0) {
  let targetDivTopPos = target.getBoundingClientRect().top;
  let windowOffset = window.pageYOffset;
  let position = targetDivTopPos + windowOffset - offset;

  return position;
}


        //====== Show submit message ======
        //=================================

const hiddenFormEnding = document.getElementById("js-hide-message");
const submitMessage = document.getElementById("js-submit-message");
const submitButton = document.getElementById("js-submit-form-btn");

// Te jāaizvieto ar submit vēlāk.

if (submitButton !== null) {
  submitButton.addEventListener("click", function() {
    hiddenFormEnding.style.display = "none";
    submitMessage.style.display = "block";
  });
}



        //====== Show supporters after select  ======
        //==========================================

const companies = {

  purch: {
    logo : "",
    city : "Rīga",
    type : "Ēdināšana",
    name  : "PURCH resturant",
    adress : "+37125425254",
    number : "Dzelzavas iela 51A"
  },

  kurts: {
    logo : "",
    city : "Rīga",
    type : "Ēdināšana",
    name  : "Kurts coffee",
    adress : "+37123202079",
    number : "Cēsu iela 20, Tērbatas iela 2i"
  },

   auch: {
    logo : "",
    city : "Rīga",
    type : "Skaistumkopšana",
    name  : "AUCH beauty home",
    adress : "+37128361686",
    number : "Adrese10"
  },

  linearis: {
    logo : "",
    city : "Rīga",
    type : "Tulkošana",
    name  : "Linearis translations",
    adress : "+37167277260",
    number : "Adrese30"
  }
}




        //====== Cookie banner ======
        //===========================

if (localStorage.getItem("cookieSeen") != "shown") {
  $("#js-cookie-banner").delay(2000).fadeIn();
  localStorage.setItem("cookieSeen","shown")
};

$("#js-agreeToCookies").click(function() {
  $("#js-cookie-banner").fadeOut();
})

$("#js-denyToCookies").click(function() {
  $("#js-cookie-banner").fadeOut();
})


        //====== Quotes Slideshow ======
        //==============================

let slideIndex = 1;

// When the page loads, it first runs the showSlides(n) function, to determine which slide to show first.
window.addEventListener("load",function() {
  showSlides(slideIndex);
})

function showSlides(n){
  const slides = document.getElementsByClassName("js-quote-slide");
  let slidesCount = slides.length;

  if (slidesCount === 0) {
    return
  }

  if (n > slidesCount) {
    slideIndex = 1
  }

  if (n < 1) {
    slideIndex = slidesCount
  }

  for (let i = 0; i < slidesCount; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

function previousSlide() {
  showSlides(slideIndex -= 1);
}

function nextSlide() {
  showSlides(slideIndex += 1);
}
