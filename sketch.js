// store my paragraph
let para
let slider
let sliderValue = 16

function setup() {
  createCanvas(400, 400);

  para = createP('this text is on the webpage, made with p5')

  // adjust the position of my p5 added <p> 
  para.position(0,20)
 // adjusting the CSS with javascript
 // any styles applied with js will override any styles applied with CSS
  para.style('background-color:blue')
  para.style('margin: 0')

  slider = createSlider(12, 72, sliderValue)
  slider.position(0, 40)
  slider.changed(sliderChanged)
}

function draw() {
  background(220);
  text('this text is not on the canvas', 10, 18)

  push()
  textSize(sliderValue)
  text(sliderValue, width / 2, height / 2)
  pop()
}

// declared function that when the slider changes, update the global slider variable to the current value of the slider
function sliderChanged(){
  sliderValue = slider.value()
}