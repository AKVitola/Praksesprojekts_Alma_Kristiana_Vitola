
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



        //====== Supporters company information and location ======
        //========================================================

const companies = [
  {
    logo : "/img/purch.png",
    cityCode: "riga",
    typeCode : "food",
    name  : "PURCH resturant",
    number : "+37125425254",
    adress : "Dzelzavas iela 51A",
    email : "info@purch.lv",
    latitude : "56.958008",
    longitude : "24.190937"
  },
  {
    logo : "/img/kurts.png",
    cityCode: "riga",
    typeCode : "food",
    name : "Kurts coffee",
    number : "+37123202079",
    adress : "Cēsu iela 20, Tērbatas iela 2i",
    email : "kurst@epasts.lv",
    latitude : "56.951087",
    longitude : "24.121022"
  },
  {
    logo : "/img/auch.png",
    cityCode: "riga",
    typeCode : "beauty",
    name  : "AUCH beauty home",
    number : "+37128361686, +371 23202079",
    adress : "Cēsu iela 20, Rīga",
    email : "auchbeauty@gmail.com",
    latitude : "56.965192",
    longitude : "24.140532"
  },
  {
    logo : "/img/logo_Linearis.png",
    cityCode: "riga",
    typeCode : "translate",
    name  : "Linearis translations",
    number : "+37167277260",
    adress : "Krišjāņa Barona iela 59",
    email : "info@linearis.lv",
    latitude : "56.956795",
    longitude : "24.132112"
  }
];

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

window.addEventListener('load', (company) => {
  showCompanies();
  hideCompanies();
});

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

function companyMatch(company) {
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

function printCompany(company) {
  const parentSection = document.getElementById("js-businessInfo");

  let div = document.createElement("div");
  parentSection.appendChild(div);
  div.setAttribute("class", "created-div");
  div.innerHTML  = '<img src="' + company.logo + '"><p class="page-text name">' + company.name + ' </p><p class="page-text contacts">' + company.adress + '<br> ' + company.number + '</p>';
}

let markers = [];
function displayMarker(company) {
  const marker = new google.maps.Marker({
    position: new google.maps.LatLng(company.latitude,company.longitude),
    map,
    icon: "/img/marker.png"
  });
  markers.push(marker);

  let activeIcon = {url: "/img/blackMarker.png"};
  let icon = {url: "/img/marker.png"};
  let contentString =
  '<div class="popup-logo"><img src="' + company.logo +
     '"></div><div class="popup-text-wrap"><div class="popup-name"><p class="page-undertitle name">' + company.name +
     ' </p></div><div class="popup-contacts"><p class="page-text contacts">' + company.number + '<br> ' + company.email +
     '<br> ' + company.adress + '</p></div></div>';

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

let map;
let infowindow;
function initMap() {
  map = new google.maps.Map(document.getElementById("js-map"), {
    center: { lat: 56.9495211, lng: 24.0959005 },
    disableDefaultUI: true,
    zoom: 13,
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

  initZoomControl(map);
  initInfoWindow();
}

function initInfoWindow() {
    infowindow = new google.maps.InfoWindow({
    content: "",
  });
}

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
