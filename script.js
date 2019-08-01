/**  console.log("Hello World");

var name = "bob"
console.log(name);
name = 15;
console.log(name);


for(var i = 0; i < 5; i++){
  console.log(i)
}

if(name <18){
  console.log("name is less than 18")
}else{
2
}

var image = document.getElementById("changeMe");

var origHeight = image.height;
var origWidth = image.width;

image.onmouseover = function(){
  this.height=1000;
  this.width=1000;
};
image.onmouseout = function(){
  this.height = origHeight;
  this.width = origWidth;
}*/
let imageSrcs =["img/child.jpg",
                "img/child2.jpg"]

let button = document.getElementById("slide")
let imageHolder = document.getElementById("changeMe")
var idx = 1;
button.onclick = function (ev){
  imageHolder.src = imageSrcs[idx];
  idx++;
  if(idx == 3){
    idx = 0;
  }
}
