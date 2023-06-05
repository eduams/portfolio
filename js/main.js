window.onscroll = function() {gallery()};

var elements = document.getElementsByClassName("gallery-pic");
var pop;

function gallery() {
  if (document.body.scrollTop > (window.innerHeight * 0.3) || document.documentElement.scrollTop > (window.innerHeight * 0.3)) {
    for(i=0;i<=7;i++){
        elements[i].style.opacity = "1";
    }
  }
}

function galleryonhover(pic){
  for(i = 0; i <=7; i++){
    elements[i].style.width = '100%';
    elements[i].style.height = '100%';
    elements[i].style.margin = '0%';
    elements[i].style.marginLeft = '0%';
    elements[i].style.zIndex = '0';  
  }
  elements[pic].style.margin = '-20%';
  elements[pic].style.marginLeft = '-10%';
  elements[pic].style.zIndex = '99';
  elements[pic].style.width = '120%';
  elements[pic].style.height = '120%';
}

function gallerymouseleave(){
  for(i = 0; i <=7; i++){
    elements[i].style.width = '100%';
    elements[i].style.height = '100%';
    elements[i].style.margin = '0%';
    elements[i].style.marginLeft = '0%';
  }
}

function showpopup(n){
  let closebehind = document.getElementById('closebehind');
  pop = document.getElementsByClassName('popup')[n];
  pop.style.display = 'flex';
  closebehind.style.display = 'inline'
}

function closepopup(){
  let closebehind = document.getElementById('closebehind');
  pop.style.display = 'none';
  closebehind.style.display = 'none'

}