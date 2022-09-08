
const container = document.querySelector(".container");
const sliderElement = document.querySelector(".slider");
const colorElement = document.querySelector(".color");
const resetButton = document.querySelector(".reset");
const output = document.querySelector(".gridSize");
let size = sliderElement.value;


let sketch = false;

function createGrid(size){
    container.style.setProperty('--size', size); // get the size of input, set it to variable size in css to create n columns and rows, then the js generates size * size divs to fill the columns and rows
    for(let i = 0; i < (size * size); i++){
      let aDiv = document.createElement("div");
      aDiv.classList.add("pixel"); // aDiv.classList.add('nameOfClass') - bug here: I did aDiv.classList.add(".pixel")

      // addEventListener to each div

    aDiv.addEventListener('mouseover', function(){
      if(!sketch) return  // explain: why this is the important line of code to determine the hover of the mouse? mouseup - sketch = false => don't draw
                          // mousedown - sketch = true -> draw 
                          // thus, if mouse-over and mousedown => return draw on the pixels
      aDiv.style.backgroundColor = colorElement.value;
    })

    // need to add event listener for mousedown
     aDiv.addEventListener('click', function(){
      aDiv.style.backgroundColor = colorElement.value;
    }) 
      container.appendChild(aDiv);
    }
}


window.addEventListener('mousedown', function(){
  sketch = true;
})

// mouse up - don't paint the pixels - 
window.addEventListener('mouseup', function(){ 
  sketch = false;
})

// element.innerHTML changes the value of HTML element
output.innerHTML = sliderElement.value;

sliderElement.addEventListener('change', function(){
  size = sliderElement.value;
  output.innerHTML = size;
  reset();
})



// reset button 
resetButton.addEventListener('click', reset);
function reset() {
  container.innerHTML = ''; // clear all the content
  createGrid(size);
}


 createGrid(size);
 

/*
1. add mouse up mouse down: OK 
2. size button
3. color button: OK
4. reset: OK 
*/
 
/*
Fix bug:
1. Why the mouse can't stop hovering when mouse is up: 
Solution: mouseover lets the mouse paint when I hover the pointer to the pixels; 
          mouseup: don't draw (window.addEventListener('mouseup), function(){ sketch = false})
          mousedown: draw  (window.addEventListener('mousedown), function(){ sketch = true})
          Thus, 
          in when mouseover, if we don't mouse up, return color the pixels
           => whenever we mouse down + mouse over, we draw on the pixels
*/