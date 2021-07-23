
let speed = 4;
const sp = [1,5,10,20,50,1000]
let isAlgoRun = false;

// Select all elements
let speedEle = document.getElementById('speed');
let resetBtn = document.getElementById('reset');
let createMazeBtn = document.getElementById('createMaze');


// Page load
function page_load() {
}
window.onload = page_load();

// reset button click
resetBtn.addEventListener('click',()=>{
  location.reload();
})

// speed change
speedEle.addEventListener('input', () => {
  speed = speedEle.value;
});

// Select path finding algo
createMazeBtn.addEventListener('click', () => {
  take_control();
  isAlgoRun = true;

  let value = createMazeBtn.value;
  switch (value) {
    case 'Create Maze - DFS':
      // no fun
      break;
  }
})

// while sorting take control from user
function take_control(){
  speedEle.disabled = true;
  createMazeBtn.disabled = true;
}

