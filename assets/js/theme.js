        //======Runs on page load======
        //============================

window.onload = function() {
  showCookieBanner();
  showSubmitDreamMessage();
  displayOnScroll();
  menuItemEventListener();
  setClassActiveToMenuItems(HEADER_NAV);
  setClassActiveToMenuItems(FOOTER_NAV);
}

        //====== Embeded youtube video======
        //==================================
const videoContainer = document.getElementById("js-video-container");
const customPlayIcon = document.getElementById("js-custom-play-icon");

window.addEventListener('load', () => {
  // slideswow in idea page
  showSlides(slideIndex);

  //play icon in index page
  if (videoContainer != null) {
    customPlayIcon.style.display= "block";
  }
});

if (videoContainer != null) {
  customPlayIcon.addEventListener("click", function() {
    customPlayIcon.style.zIndex= "-1";
      player.playVideo();
  });
}

//This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//This function creates an <iframe> (and YouTube player) after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '100%',
    width: '100%',
    videoId: '1PalAURGxtM',
    playerVars:{
      rel: 0,
      modestbranding: 1
    },
    events: {
      'onStateChange': onPlayerStateChange
    }
  });
}

//The API calls this function when the player's state changes.
var done = false;
function onPlayerStateChange(event) {
  if(event.data == YT.PlayerState.PLAYING) {
    customPlayIcon.style.zIndex= "-1";
  }

  if(event.data == YT.PlayerState.PAUSED || event.data == YT.PlayerState.ENDED) {
    customPlayIcon.style.zIndex= "1";
  }
}

        //====== Play video in an overlay ======
        //=====================================

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

  const closeIcon = document.getElementById("js-closeIcon");

  closeIcon.addEventListener("click", function() {
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

function menuItemEventListener() {
  let liElements = document.getElementById("js-nav").getElementsByTagName("li");
  for (let i = 0; i < liElements.length; i++) {
    liElements[i].addEventListener("click", closeMenuOnSelect);
  }
}

function closeMenuOnSelect() {
  if (document.body.offsetWidth <= 1000) {
    closeMenu();
    startPageScrolling();
  }
}

// === Add class active when a list item is clicked on

const HEADER_NAV = ".nav ul li a";
const FOOTER_NAV = ".footer-nav ul li a";

function setClassActiveToMenuItems(x) {
  const currentLocation = location.href;
  const menuItem = document.querySelectorAll(x);
  const menuLength = menuItem.length;
  for (let i = 0; i < menuLength; i++) {
    if(menuItem[i].href === currentLocation ) {
      menuItem[i].className = "active";
    }
  }
}

        //====== Go to top button ======
        //==============================

function displayOnScroll() {
  goToTopButton = document.getElementById("js-goToTopButton");

  window.onscroll = function () {
    displayGoToTopButton();
  };
}

//Display go to top button when scrolled 20 px
function displayGoToTopButton() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    goToTopButton.style.display = "block";
  } else {
    goToTopButton.style.display = "none";
  }
}

function goToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

        //====== Show submit message ======
        //=================================

function showSubmitDreamMessage() {
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
}

        //====== Supporters company information and location ======
        //========================================================

const companies = [
  {
    logo : "assets/img/purch.png",
    cityCode: "riga",
    typeCode : "food",
    name  : "PURCH resturant",
    number : "+37125425254",
    adress : "Dzelzavas iela 51A",
    email : "info@purch.lv",
    latitude : "56.958008",
    longitude : "24.190937",
  },
  {
    logo : "assets/img/kurts.png",
    cityCode: "riga",
    typeCode : "food",
    name : "Kurts coffee",
    number : "+37123202079",
    adress : "Cēsu iela 20, Tērbatas iela 2i",
    email : "kurst@epasts.lv",
    latitude : "56.951087",
    longitude : "24.121022",
  },
  {
    logo : "assets/img/auch.png",
    cityCode: "riga",
    typeCode : "beauty",
    name  : "AUCH beauty home",
    number : "+37128361686, +371 23202079",
    adress : "Cēsu iela 20, Rīga",
    email : "auchbeauty@gmail.com",
    latitude : "56.965192",
    longitude : "24.140532",
  },
  {
    logo : "assets/img/logo_Linearis.png",
    cityCode: "riga",
    typeCode : "translate",
    name  : "Linearis translations",
    number : "+37167277260",
    adress : "Krišjāņa Barona iela 59",
    email : "info@linearis.lv",
    latitude : "56.956795",
    longitude : "24.132112",
  }
];

//Returns the selected city/type from dropdowns.
function selectedCity() {
  const citySelect = document.getElementById("js-city");
  let displayCity = citySelect.options[citySelect.selectedIndex].value;

  return displayCity;
}

function selectedType() {
  const typeSelect = document.getElementById("js-type");
  let displayType = typeSelect.options[typeSelect.selectedIndex].value;

  return displayType;
}

if(document.getElementById("js-businessInfo") !== null) {
  window.addEventListener('load', () => {
    showCompanies();
    hideCompanies();
  });
}

//Hides previously showed companies and markers and show the new ones according to the selection in the dropdown.
function showCompanies() {
  hideCompanies();
  removeMarkers();

  let filteredCompanies = companies.filter(companyMatch);

  filteredCompanies.forEach(company => {
    printCompany(company);
    displayMarker(company);
  });
}

function hideCompanies() {
  const container = document.getElementById("js-businessInfo");
  container.innerHTML = "";
}

//Check if company matches selected dropdown values.
//If there is no selection made in dropdown then all the companies are shown.
function companyMatch(company) {
  //Return true if nothing is selected.
  let cityMatch = true;
  let typeMatch = true;

  if (selectedCity() != '') {
    cityMatch = company.cityCode === selectedCity();
  }

  if (selectedType() != '') {
    typeMatch = company.typeCode === selectedType();
  }

  return cityMatch && typeMatch;
}

//Creates a div for each selected company and displays its information.
function printCompany(company) {
  const parentSection = document.getElementById("js-businessInfo");

  let div = document.createElement("div");
  parentSection.appendChild(div);
  div.setAttribute("class", "created-div");
  div.innerHTML  = '<img src="' + company.logo + '"><p class="page-text name">' + company.name + ' </p><p class="page-text contacts">' + company.adress + '<br> ' + company.number + '</p>';
}

let map;
let infowindow;
let markers = [];

function initMap() {
  if(document.getElementById("js-map") === null) {
    return
  }

  map = new google.maps.Map(document.getElementById("js-map"), {
    center: { lat: 56.9495211, lng: 24.0959005 },
    disableDefaultUI: true,
    zoom: 12,
    styles: [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "elementType": "labels.text",
        "stylers": [
          {
            "weight": 5
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9f9d9d"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#bdbdbd"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "poi.business",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi.government",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi.government",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#e0b610"
          },
          {
            "visibility": "on"
          },
          {
            "weight": 8
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dadada"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "road.local",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "transit",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#c9c9c9"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      }
    ]
  });

  zoomLevel();
  initZoomControl(map);
  initInfoWindow();
}

function initInfoWindow() {
    infowindow = new google.maps.InfoWindow({
    content: "",
  });
}

window.addEventListener("resize", () => {
  zoomLevel();
});

function zoomLevel() {

  if(map != undefined) {
      if(window.innerWidth < 768) {
      map.setZoom(11);
      }
      if (window.innerWidth >= 768 && window.innerWidth <= 1366) {
        map.setZoom(12);
      }
      if ( window.innerWidth > 1366) {
        map.setZoom(13);
      }
  }
}

//Adds a zoom functionality to the custom buttons.
function initZoomControl(map) {
  document.querySelector(".js-zoom-in").onclick = function () {
    map.setZoom(map.getZoom() + 1);
  };
  document.querySelector(".js-zoom-out").onclick = function () {
    map.setZoom(map.getZoom() - 1);
  };
  map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(
    document.querySelector(".js-zoom-control-wrap")
  );
}

//Displays a custom marker for selected companies.
function displayMarker(company) {
  const marker = new google.maps.Marker({
    position: new google.maps.LatLng(company.latitude,company.longitude),
    map,
    icon: "assets/img/marker.png"
  });
  markers.push(marker);

  let activeIcon = {url: "assets/img/blackMarker.png"};
  let icon = {url: "assets/img/marker.png"};
  let contentString =
  '<div class="popup-logo"><img src="' + company.logo +
     '"></div><div class="popup-text-wrap"><div class="popup-name"><p class="page-undertitle name">' + company.name +
     ' </p></div><div class="popup-contacts"><p class="page-text contacts">' + company.number + '<br> ' + company.email +
     '<br> ' + company.adress + '</p></div></div>';

  //Shows information window when marker is clicked on and changes icon.
  marker.addListener('click', (function() {
    for (let j = 0; j < markers.length; j++) {
      markers[j].setIcon(icon);
    }
    this.setIcon(activeIcon);

    infowindow.open(map, marker);
    infowindow.setContent(contentString);
  }));
}

function removeMarkers(){
  for(let i = 0; i < markers.length; i++){
      markers[i].setMap(null);
  }
}

        //====== Cookie banner ======
        //===========================

function showCookieBanner() {
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
}

        //====== Quotes Slideshow ======
        //==============================

let slideIndex = 1;

// When the page loads, it first runs the showSlides(n) function, to determine which slide to show first.
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

//====== Numbered gold squares======
//=================================

const stories = [
  { id : 1,
    name : "Sibilla",
    image : "assets/img/17.jpg",
    link : "https://sparkleheart.org/wp-content/uploads/2020/09/Sibilla.mp4",
  },
  { id : 2,
    name : "Lauma",
    image : "assets/img/11.jpg",
    link : "https://sparkleheart.org/wp-content/uploads/2020/09/Lauma.mp4",
  },
  { id : 3,
    name : "Valentīna",
    image : "assets/img/16.jpg",
    link : "https://sparkleheart.org/wp-content/uploads/2020/09/BM_3OF99_Valentina.mp4",
  },
  { id : 4,
    name : "Arta",
    image : "assets/img/5.jpg",
    link : "https://sparkleheart.org/wp-content/uploads/2020/09/BM_4OF99_Arta.mp4",
  },
  { id : 5,
    name : "Ketija",
    image : "assets/img/10.jpg",
    link : "https://sparkleheart.org/wp-content/uploads/2020/09/BM_5OF99_Ketija.mp4",
  },
  { id : 6,
    name : "Anda",
    image : "assets/img/6.jpg",
    link : "https://sparkleheart.org/wp-content/uploads/2020/09/BM_6OF99_Anda.mp4",
  },
  { id : 7,
    name : "Asnāte",
    image : "assets/img/4.jpg",
    link : "https://sparkleheart.org/wp-content/uploads/2020/09/BM_7OF99_Asnate.mp4",
  },
  { id : 8,
    name : "Indra",
    image : "assets/img/8.jpg",
    link : "https://sparkleheart.org/wp-content/uploads/2020/09/BM_8OF99_Indra.mp4",
  },
  { id : 9,
    name : "Alīna",
    image : "assets/img/1.jpg",
    link : "https://sparkleheart.org/wp-content/uploads/2020/09/BM_9OF99_Alina.mp4",
  },
  { id : 10,
    name : "Līga",
    image : "assets/img/12.jpg",
    link : "https://sparkleheart.org/wp-content/uploads/2020/09/BM_10OF99_Liga.mp4",
  },
  { id : 11,
    name : "Regīna",
    image : "assets/img/14.jpg",
    link : "https://sparkleheart.org/wp-content/uploads/2020/09/BM_11OF99_Regina.mp4",
  },
  { id : 12,
    name : "Marta",
    image : "assets/img/13.jpg",
    link : "https://sparkleheart.org/wp-content/uploads/2020/09/BM_12OF99_Marta.mp4",
  },
  { id : 13,
    name : "Zanda",
    image : "assets/img/15.jpg",
    link : "https://sparkleheart.org/wp-content/uploads/2020/09/BM_13OF99_Zanda.mp4",
  },
  { id : 14,
    name : "Ilze",
    image : "assets/img/7.jpg",
    link : "https://sparkleheart.org/wp-content/uploads/2020/09/BM_14OF99_Ilze.mp4",
  },
  { id : 15,
    name : "Katrīna",
    image : "assets/img/9.jpg",
    link : "https://sparkleheart.org/wp-content/uploads/2020/09/BM_15OF99_Katrina.mp4",
  },
  { id : 16,
    name : "Gunita",
    image : "assets/img/2.jpg",
    link : "https://sparkleheart.org/wp-content/uploads/2020/09/BM_16OF99_Gunita.mp4",
  },
  { id : 17,
    name : "Egija",
    image : "assets/img/3.jpg",
    link : "https://sparkleheart.org/wp-content/uploads/2020/09/BM_17OF99_Egija.mp4",
  },
  { id : 18,
    name : "Jauns stāsts tiks pievienots drīzumā",
    soon : true,
  },
]

let storyNumber = 1;
let gridLenght;
let gridLengthLimit = 99;
const gridContainer = document.getElementById("js-grid-container");

//On page load gold squares are generated and also on page resize the appropriate number of squares are generated.
if(document.getElementById("js-grid-container") !== null) {
  window.addEventListener("load", () => {
    generateGoldSquares(stories);
    addClickEventToGoldSquares();
  })

  window.addEventListener("resize", () => {
    generateGoldSquares(stories);
    addClickEventToGoldSquares();
  });
}

//Generated gold squares are deleted and the necessary number is then generated according to the width of the window.
function generateGoldSquares(stories) {
  deleteGoldSquares();
  squareCount();

  storyNumber = 1;

  stories.forEach(story => {
    createArticle(story);
  });

  while (storyNumber <= gridLenght) {
    createArticle();
  }
}

function deleteGoldSquares() {
  gridContainer.innerHTML = "";
}

function squareCount() {
  if(window.innerWidth > 1366) {
    gridLenght = 99;
  } else {
    gridLenght = 20;
  }
}

function createArticle(story = null) {
  let article = document.createElement("article");
  gridContainer.appendChild(article);
  article.setAttribute("class", "post-gallery");
  article.setAttribute("id", storyNumber);
  article.innerHTML = generateStoryContent(story);
}

function generateStoryContent(story) {
  let result;

  if (!story) {
    result = `<div class="gold-image"></div>
              <div class="gold-number page-undertitle">${storyNumber}</div>`;
  } else {
    result = `<figure class="story-image">
                <img src="${story.image}" alt="${story.name}">
                <div class="content-gallery">
                  <p class="page-undertitle">${story.name}</p>
                </div>
              </figure>
              <div class="story-number page-undertitle">${storyNumber}</div>­`;

    if(story.soon) {
      result = `<figure class="story-image">
                  <img src="assets/img/extra-gold.png" alt="Zelta krāsas kvadrāts.">
                  <p class="page-undertitle new-stories">${story.name}</p>
                </figure>
                <div class="story-number page-undertitle">${storyNumber}</div>­­`
    }
  }

  storyNumber += 1;

  return result;
}

//Clicking on the button 20 more squares are generated till reaches 99 squares then the button is hidden.
if(document.getElementById("js-more-dreams") !== null) {
  const btnMoreSquares = document.getElementById("js-more-dreams");

  btnMoreSquares.addEventListener("click", () => {
    increaseGridLength(20);

    if(gridLenght >= gridLengthLimit) {
      btnMoreSquares.style.display = "none";
    }

    gridContainer.style.height = "auto";

    while (storyNumber <= gridLenght) {
      createArticle();
    }
  })
}

function increaseGridLength(step) {
  gridLenght = gridLenght + step;

  if (gridLenght > gridLengthLimit) {
      gridLenght = gridLengthLimit;
  }
}


//====== Dream video ======
//=========================

function addClickEventToGoldSquares() {
  const goldSquares = document.getElementsByClassName("post-gallery");
  let goldSquareCount = goldSquares.length;

  for (let i = 0; i < goldSquareCount; i++) {
    goldSquares[i].addEventListener("click", () => {
      let goldSquareId = goldSquares[i].id;
      let story = stories.find(story => story.id == goldSquareId);

      if (story != null && story.hasOwnProperty("link")) {
        fullscreenOverlay(story);
      }
    });
  }
}

function fullscreenOverlay(story) {
  let overlayDiv = document.createElement("div");

  document.body.appendChild(overlayDiv);
  overlayDiv.setAttribute("class", "dream-overlay");
  overlayDiv.innerHTML = generateOverlayContent(story);

  const closeIcon = document.getElementById("js-closeIcon");
  const playImg = document.getElementById("js-story-playImg");
  const storyVideo = document.getElementById("js-story-video");

  if(overlayDiv !== null) {
    closeIcon.addEventListener("click", () => {
      overlayDiv.remove();
      startPageScrolling();
    });

    playImg.addEventListener("click", () => {
      hideplayImg();
      storyVideo.play();
    });

    storyVideo.addEventListener("click", () => {
      hideplayImg();
    })

    stopPageScrolling();
  }
}

function generateOverlayContent(story) {
  return `<div class= "overlay-inner-container">
            <div class="closeIcon" id="js-closeIcon"></div>
            <div class="story-video-wrap">
              <video class="story-video" id="js-story-video" type="video/mp4" controls controlsList="nodownload">
                Jūsu interneta pārlūks neļauj atskaņot video.
                <source src="${story.link}">
              </video>
              <img class="story-video-playImg" id="js-story-playImg" src="assets/img/play.png" alt="Atskaņošanas pogas attēls." width="126" height="123">
            </div>
            <div class="storyteller" id="js-storyteller">
              <p class="page-undertitle">${story.name}</p>
            </div>
          </div>`
}


function hideplayImg() {
  const playImg = document.getElementById("js-story-playImg");
  playImg.style.zIndex = "-1";
}

