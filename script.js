console.log(window.innerWidth);//breedte
console.log(window.innerHeight);//hoogte
let imageNames = ["big1.jpg", "big2.jpg", "big3.jpg", "big4.jpg", "big5.jpg", "big6.jpg", "big7.jpg", "big8.jpg", "big9.jpg", "big10.jpg"];
let cattext = ["saaie kat", "groot hoofd kat", "luie kat", "dood lichende kat", "dikke kat", "schattige poes", "niet vrolijke kat", "zwart witte kat", "kat in bed kat", "enzo knol zijn poes"]
let tumbs = document.getElementById('tumbs');
let text = document.getElementById('kat');
let display = document.getElementById('display' );
let currentImage;
let add = 5;


selectImage(Math.floor(Math.random()*imageNames.length));


for(let i= 0; i<imageNames.length; i++){
  let tumb = new Image();
  tumb.src = "images/pics_small/" + imageNames[i];
  tumb.id = i;
  tumbs.appendChild(tumb);


  tumb.addEventListener("click",function(e){
    selectImage(e.target.id);
  });
}

function selectImage(id){
  display.src = "images/pics_big/" + imageNames[id];
  currentImage = id;
  counter();
}



 


left.addEventListener("click", function(e){
  console.log("left");
  backward();
})
right.addEventListener("click", function(e){
  console.log("right");
  forward();
})
down.addEventListener("click", function(e){
  console.log("down");
  downwards();
})
up.addEventListener("click", function(e){
  console.log("up");
  upwards();
})

function backward(){

  currentImage = Number(currentImage) - 1;
  console.log(currentImage);
  selectImage(currentImage);
  if (currentImage < 0) {
    currentImage = imageNames.length -1;}
    selectImage(currentImage);
  }

function forward(){
  currentImage = Number(currentImage) + 1;
    console.log(currentImage);
  selectImage(currentImage);
  if (currentImage == imageNames.length) {
    currentImage = 0;}
    selectImage(currentImage);
}
function downwards(){
  if (Number(currentImage) + add >= imageNames.length) {
    if(window.matchMedia("(min-width: 600px)").matches)
    {
      currentImage = currentImage - 5 ;
    }
    else if(currentImage == imageNames.length - 1)
    {
        currentImage = 0;
          selectImage(currentImage);
          console.log(currentImage);
    }
    else if(currentImage == imageNames.length - 2)
    {
        currentImage = 2;
          selectImage(currentImage);
          console.log(currentImage);
    }
    else if(currentImage == imageNames.length - 3)
    {
        currentImage = 1;
          selectImage(currentImage);
          console.log(currentImage);
    }

  }
  else
  {
  currentImage = Number(currentImage) + add;
  }
  selectImage(currentImage);
}
function upwards(){
  currentImage = Number(currentImage) - add
  if (currentImage < 0) {
    if(window.matchMedia("(min-width: 600px)").matches)
    {
    currentImage = currentImage + add * 2
    }
    else if(currentImage == -3)
    {
        currentImage = 9;
          selectImage(currentImage);
          console.log(currentImage);
    }
    else if(currentImage == -2)
    {
        currentImage = 7;
          selectImage(currentImage);
          console.log(currentImage);
    }
    else if(currentImage == -1)
    {
        currentImage = 8;
          selectImage(currentImage);
          console.log(currentImage);
    }
}
selectImage(currentImage);
}


function counter(){
text.innerHTML = "Kat: "+ cattext[currentImage];
    let color1 = Math.floor(Math.random() * 256);
    let color2 = Math.floor(Math.random() * 256);
    let color3 = Math.floor(Math.random() * 256);
    let backgroundcolor = "rgb(" + color1 + "," + color2 + "," + color3 + ")";
    document.body.style.background = backgroundcolor;
}

window.addEventListener("resize", function() {
    if (window.matchMedia("(min-width: 600px)").matches) {
      add = 5;  console.log("Screen width is at least 500px");
    } else {
        console.log("Screen less than 500px");
        add = 3;
    }
});
window.addEventListener("load", function()
{
  if (window.matchMedia("(min-width: 600px)").matches) {
    add = 5;  console.log("Screen width is at least 500px");
  } else {
      console.log("Screen less than 500px");
      add = 3;
  }
});
