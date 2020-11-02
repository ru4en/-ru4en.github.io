// NOTE: cookies
// NOTE:
var menuCol = 0;
var navDropDown = 0;
var navbar = document.getElementById('navbar');
// NOTE:
let map;

function initMap() {
map = new google.maps.Map(document.getElementById("map"), {
  center: { lat: 51.563306, lng: -1.783594 },
  zoom: 8,
});
}

function CallMenu() {
  document.getElementById('navbar').classList.toggle("showMenu");
  document.getElementById('navbar').style.background = navDropDown;
  document.getElementById("line1").classList.toggle("line1a");
  document.getElementById("line2").classList.toggle("line2a");
  document.getElementById("line3").classList.toggle("line3a");
  document.documentElement.classList.toggle("overflowblock");
  document.getElementById('navDropDown').classList.toggle("allowScroll");
}

window.onload = function(){
  if (CSS.supports("backdrop-filter: blur(20px)")){
   document.getElementById("navbar").classList.toggle("blur");
   menuCol = "rgba(34, 38, 41, 0.6)";
   navDropDown = "rgba(34, 38, 41, 0.8)";
 }
 else if(navigator.userAgent.indexOf("Safari") != -1){
   document.getElementById("navbar").classList.toggle("blur");
   menuCol = 'rgba(34, 38, 41, 0.6)';
   navDropDown = "rgba(34, 38, 41, 0.8)";
 }
 else {
   menuCol = 'rgba(34, 38, 41, 0.95)';
   navDropDown = "rgba(34, 38, 41, 1)";
 }
}

// NOTE:
window.onscroll = function(){
   if (window.pageYOffset >300) {
     document.getElementById('navbar').style.background = menuCol;
     document.getElementById('line1').style.background = "#86c232";
     document.getElementById('line2').style.background = "#86c232";
     document.getElementById('line3').style.background = "#86c232";
   }
   else if (window.pageYOffset <300) {
     document.getElementById('navbar').style.background = "transparent";
     document.getElementById('line1').style.background = "#61892f";
     document.getElementById('line2').style.background = "#61892f";
     document.getElementById('line3').style.background = "#61892f";
     document.getElementById('navbar').style.borderBottom = "none";
   }
   else{
     document.getElementById('navbar').style.background = "rgba(34, 38, 41, 1)";
     document.getElementById('line1').style.background = "#86c232";
     document.getElementById('line2').style.background = "#86c232";
     document.getElementById('line3').style.background = "#86c232";
   }
 }


// NOTE:
$(window).on('scroll', function() {
  if ($(window).scrollTop() >= $('#WHOAMI').offset().top) {
    document.getElementById("scro1").style.background = "#86c232";
    document.getElementById("scro1").style.fontWeight = "bold";
    document.getElementById("scro1").style.color = "black";
  }
  else {
    document.getElementById("scro1").style.background = "inherit";
    document.getElementById("scro1").style.fontWeight = "normal";
    document.getElementById("scro1").style.color = "gray";
  }
});

// NOTE: #Projects #Abilities #Contact
$(window).on('scroll', function() {
  if ($(window).scrollTop() >= $('#Projects').offset().top) {
    document.getElementById("scro1").style.background = "inherit";
    document.getElementById("scro1").style.fontWeight = "normal";
    document.getElementById("scro1").style.color = "gray";
    document.getElementById("scro2").style.background = "#86c232";
    document.getElementById("scro2").style.fontWeight = "bolder";
    document.getElementById("scro2").style.color = "black";
  }
  else {
    document.getElementById("scro2").style.background = "inherit";
    document.getElementById("scro2").style.fontWeight = "normal";
    document.getElementById("scro2").style.color = "gray";
  }
});

$(window).on('scroll', function() {
  if ($(window).scrollTop() >= $('#Abilities').offset().top) {
    document.getElementById("scro2").style.background = "inherit";
    document.getElementById("scro2").style.fontWeight = "normal";
    document.getElementById("scro2").style.color = "gray";
    document.getElementById("scro3").style.background = "#86c232";
    document.getElementById("scro3").style.fontWeight = "bolder";
    document.getElementById("scro3").style.color = "black";
  }
  else {
    document.getElementById("scro3").style.background = "inherit";
    document.getElementById("scro3").style.fontWeight = "normal";
    document.getElementById("scro3").style.color = "gray";
  }
});

$(window).on('scroll', function() {
  if ($(window).scrollTop() >= $('#Contact').offset().top) {
    document.getElementById("scro3").style.background = "inherit";
    document.getElementById("scro3").style.fontWeight = "normal";
    document.getElementById("scro3").style.color = "gray";
    document.getElementById("scro4").style.background = "#86c232";
    document.getElementById("scro4").style.fontWeight = "bolder";
    document.getElementById("scro4").style.color = "black";
  }
  else {
    document.getElementById("scro4").style.background = "inherit";
    document.getElementById("scro4").style.fontWeight = "normal";
    document.getElementById("scro4").style.color = "gray";
  }
});


// NOTE
function CallBookmark() {
  document.getElementById('Scrooller').style.display = "block";
  document.getElementById('scroollerSwitch2').style.display = "none";
}
function xBookmark() {
  document.getElementById('Scrooller').style.display = "none";
  document.getElementById('scroollerSwitch2').style.display = "block";
}
