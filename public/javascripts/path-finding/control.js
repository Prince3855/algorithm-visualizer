let container = document.querySelector('#maindiv');

// set height and width of container
let width = container.offsetWidth;
let height = container.offsetHeight;

height = parseInt(height / 25);
width = parseInt(width / 25);

let mainBoard = document.querySelector('#mainBoard');

// Global variables
let rows = height, cols = width;
let div_array = [rows];
let status = [rows];
let speed = 3, delay = 50, st_delay = 0;
// 1 5 10 25 50 100
let start = [7,7], end = [rows-7,cols-5];
let isAlgoRun = false;

// Select all elements
let speedEle = document.getElementById('speed');
let resetBtn = document.getElementById('reset');
let findPathBtn = document.getElementById('findPath');

// create board function
function create_board() {

  mainBoard.innerHTML = "";
  for(let r=0; r<rows; r++){
    tr = document.createElement('tr');
    tr.id = `${r}`;
    for(let c=0; c<cols; c++){
      div_array[r][c] = document.createElement('td');
      div_array[r][c].id= `${r}_${c}`;
      div_array[r][c].className = `box`;
      status[r][c]=0;
      
      div_array[r][c].style.height = `24px`;
      div_array[r][c].style.width = '24px';
      div_array[r][c].style.backgroundColor = 'white';
      div_array[r][c].style.border = '1px solid rgb(175, 216, 248)';
      tr.appendChild(div_array[r][c])
    }
    mainBoard.appendChild(tr);
  }
  
  div_array[start[0]][start[1]].className = "start";
  div_array[end[0]][end[1]].className = "target";
  div_array[start[0]][start[1]].style.backgroundColor = "blue";
  div_array[end[0]][end[1]].style.backgroundColor = "blue";
  div_array[end[0]][end[1]].style.border="2px solid black";
  div_array[start[0]][start[1]].style.border = "2px solid black"
}

// Page load
function page_load() {
  for(let r=0; r<rows; r++){
    div_array[r] = new Array(cols);
    status[r] = new Array(cols);
  }
  create_board();
}
window.onload = page_load();


// speed change
speedEle.addEventListener('input', () => {
  speed = speedEle.value;
});

// update divs
function div_update(row, col, color) {
  setTimeout(() => {
    div_array[row][col].style.backgroundColor = color;
  }, st_delay += delay);
}

// reset button click
resetBtn.addEventListener('click',()=>{
  location.reload();
})

// speed change
speedEle.addEventListener('input', () => {
  let sp = [100,50,25,10,5,1]
  speed = speedEle.value;
  delay = sp[parseInt(speed)];
});

// Select path finding algo
findPathBtn.addEventListener('click', () => {
  take_control();
  isAlgoRun = true;

  let value = findPathBtn.value;
  switch (value) {
    case 'DFS':
      dfs();
      break;
    case 'BFS':
      bfs();
      break;
  }
})

// while sorting take control from user
function take_control(){
  speedEle.disabled = true;
  findPathBtn.disabled = true;
}

// create Wall
$(document).ready(function () {
  var isMouseClicked = false
  $('.box').mousedown(function () {
    isMouseClicked = true;
  }).mouseup(function () {
    isMouseClicked = false;
  }).mousemove(function () {
    if (isMouseClicked && isAlgoRun==false) {
      let id=$(this).attr('id');
       id=id.split("_");
       let r = parseInt(id[0]), c = parseInt(id[1]);
       if(status[r][c]==0) div_array[r][c].style.backgroundColor = "#34495e";
       status[r][c]=1;
    }
  });
});

