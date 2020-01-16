function Topnav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsivenav";
  } else {
    x.className = "topnav";
  }
}
/*slide show */
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activedot", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " activedot";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

/* Soup of the day  */
  var d = new Date();
  var weekday = new Array(7);
  weekday[0] = "Broccoli Cheddar";
  weekday[1] = "Chicken Noddle";
  weekday[2] = "Minestrone";
  weekday[3] = "Loaded Baked Potato ";
  weekday[4] = "Minestrone";
  weekday[5] = "Loaded Baked Potato";
  weekday[6] = "Chicken Noddle";
  
  var month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";
  var m = month[d.getMonth()]; 
 
  if(m == "May" || m == "June" || m == "July" || m == "August" || m == "September" ){
    n = "Sorry for the inconvenience. Come back in October for soup"
    document.getElementById("soup").innerHTML =n;

  }
  else{
    var n = "Today's Soup: " + weekday[d.getDay()];
    var o = "Tomorrow's Soup: " + weekday[d.getDay()+1];
   
    document.getElementById("soup").innerHTML =n;
    document.getElementById("next").innerHTML =o;
  
  }

/* tabs */
function openFood(evt, food) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(food).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

/*Arcade pics */
function myFunction(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg");
  // Get the image text
  var imgText = document.getElementById("imgtext");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText.innerHTML = imgs.alt;
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
} 

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// Get the modal
var Homemade = document.getElementById("Homemade");

// Get the button that opens the modal
var Chips = document.getElementById("Chips");

// Get the <span> element that closes the modal
var span1= document.getElementsByClassName("close1")[0];

// When the user clicks the button, open the modal 
Chips.onclick = function() {
  Homemade.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  Homemade.style.display = "none";
}


// Get the modal
var Mushrooms = document.getElementById("Mush");

// Get the button that opens the modal
var Mush = document.getElementById("Mushrooms");

// Get the <span> element that closes the modal
var span2= document.getElementsByClassName("close2")[0];

// When the user clicks the button, open the modal 
Mush.onclick = function() {
  Mushrooms.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
  Mushrooms.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == Mushrooms) {
    Mushrooms.style.display = "none";
  }
}