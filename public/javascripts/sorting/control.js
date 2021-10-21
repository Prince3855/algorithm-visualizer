// Global variables
let array_size = 15;
let div_array = [];
let div_height = [];
let speed = 3, delay = 50, st_delay = 0;
// speed : 1 5 50 100 500 1000

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
  let sp = [1000,500,100,50,5,1]
  speed = speedEle.value;
  delay = sp[parseInt(speed)];
  console.log(delay)
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

// reset button click
resetBtn.addEventListener('click',()=>{
  location.reload();
})


// update divs
function div_update(position, height, color) {
  setTimeout(() => {
    div_array[position].style.backgroundColor = color;
    div_array[position].style.height = `${height}%`;
    div_height[position] = height;
  }, st_delay += delay);
}


// select Sorting Algo
sortBtn.addEventListener('click', () => {

  take_control();

  let value = sortBtn.value;
  switch (value) {
    case 'Bubble':
      bubble_sort();
      break;
    case 'Selection':
      selection_sort();
      break;
    case 'Merge':
      merge_sort();
      break;
    case 'Insertion':
      insertion_sort();
      break;
    case 'Heap':
      heap_sort();
      break;
  }
})

// while sorting take control from user
function take_control(){
  speedEle.disabled = true;
  sizeEle.disabled = true;
  generateArrayBtn.disabled = true;
  sortBtn.disabled = true;
}