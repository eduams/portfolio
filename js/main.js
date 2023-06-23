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
const canvas = document.getElementById("canvas");
//depois fazer uma função que pega a resolução da tela
//width_screen = pegar res da tela
//height_screen = pegar res da tela
canvas.width  = 1440;
canvas.height = 900; 
const ctx = canvas.getContext("2d");

function drawcube(x,y,fill){
  ctx.fillStyle = fill;
  ctx.fillRect(x, y, 2, 2);
}

var xx = [];
var yy = [];
var reverse_x = [];
var reverse_y = [];
var speed_x = [];
var speed_y = [];
var fillcolor = [];
for(let i = 0;i<149;i++){
  xx[i] = Math.random() * 2800;
  yy[i] = Math.random() * 1800;  
  reverse_x[i] = Math.random() >= 0.5;
  reverse_y[i] = Math.random() >= 0.5;
  speed_x[i] = Math.random() * 0.2;
  speed_y[i] = Math.random()* 0.2;
}

setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for(let i = 0;i<149;i++){
      fillcolor[i] = Math.random();

      if (fillcolor[i] > 0.93){
        window.onload = drawcube(xx[i],yy[i], "steelblue");
      }
      else{
        window.onload = drawcube(xx[i],yy[i], "white");
      }

      if (yy[i] > 900){
        reverse_y[i] = true;
      }
      if (yy[i] < 0){
        reverse_y[i] = false;
      }
      if (reverse_y[i] == false){
        yy[i] = yy[i] + (speed_y[i] + 0.3);
      }
      else{
        yy[i] = yy[i] - (speed_y[i] + 0.3);
      }

      if (xx[i] > 1400){
        reverse_x[i] = true;
      }
      if (xx[i] < 0){
        reverse_x[i] = false;
      }
      if (reverse_x[i] == false){
        xx[i] = xx[i] + (speed_x[i] + 0.5);
      }
      else{
        xx[i] = xx[i] - (speed_x[i] + 0.5);
      }
  }
}, 50);

