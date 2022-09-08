
const container = document.querySelector(".container");
const sliderElement = document.querySelector(".slider");
const colorElement = document.querySelector(".color");
const resetButton = document.querySelector(".reset");
const output = document.querySelector(".gridSize");
let size = sliderElement.value;


let sketch = false;

function createGrid(size){
    container.style.setProperty('--size', size); 
    for(let i = 0; i < (size * size); i++){
      let aDiv = document.createElement("div");
      aDiv.classList.add("pixel");

      // addEventListener to each div

    aDiv.addEventListener('mouseover', function(){
      if(!sketch) return
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


window.addEventListener('mouseup', function(){ 
  sketch = false;
})


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
 
