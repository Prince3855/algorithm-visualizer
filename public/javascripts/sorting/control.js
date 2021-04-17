let array_size = 20;
let div_array = [];
let div_height = [];
let speed = 0, delay = 5;

// Select all elements
let container = document.getElementById('main');
let speedEle = document.getElementById('speed');
let sizeEle = document.getElementById('size');
let generateArrayBtn = document.getElementById('generate');
let resetBtn = document.getElementById('reset');
let sortBtn = document.getElementById('sort');

// Generate Array function
function generate_array() {

  container.innerHTML = "";

  for (let i = 0; i < array_size; i += 1) {
    div_height[i] = Math.floor(Math.random() * (100 - 5 + 1)) + 5;

    div_array[i] = document.createElement('div');
    div_array[i].style.height = `${div_height[i]}%`;
    div_array[i].style.display = 'inline-block';
    div_array[i].style.width = '500px';
    div_array[i].style.backgroundColor = 'blue';
    div_array[i].style.margin = '0px 1px 0px 0px';

    container.appendChild(div_array[i])
  }
}

// Page load
function page_load() {
  array_size = sizeEle.value;
  generate_array();
}
window.onload = page_load();

// speed change
speedEle.addEventListener('input', () => {
  speed = speedEle.value;
});

// Array Size Change
sizeEle.addEventListener('input', () => {
  array_size = sizeEle.value;
  generate_array();
});

// Generate Array button click
generateArrayBtn.addEventListener('click', () => {
  generate_array();
})

// update divs
function div_update(position, height, color) {
  div_array[position].style.backgroundColor = color;
  div_array[position].style.height = `${height}%`;
  div_height[position] = height;
}

// delay function
function getDelay() {
  return new Promise(resolve => setTimeout(resolve, delay));
}



// Sorting
sortBtn.addEventListener('click', () => {
  bubble_sort();
  // selection_sort();
})
sortBtn.addEventListener('click', () => {
  // bubble_sort();
  selection_sort();
})