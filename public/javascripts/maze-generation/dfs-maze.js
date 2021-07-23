let w = 30;
var ww = window.innerWidth;
var hh = window.innerHeight-2*50-110;
let xmar = ww+120;
ww = Math.floor(ww/w)*w;
xmar-=ww; ww-=120;
hh = Math.floor(hh/w)*w;

let canvas ;


let row ;
let col ;
let grid ;

let stack = [];

// Cell class
function Cell(i,j) {
    this.i = i;
    this.j = j;
    this.wall = [true,true,true,true];
    this.isVisited = false;

    this.drawCell = function(){
        let x = this.i*w, y=this.j*w;
        
        if(this.isVisited) fill(7, 16, 82);
        else fill(51);
        noStroke();
        rect(this.i*w,this.j*w,w,w);
        
        stroke(255);
        if(this.wall[0]) line(x,y,x+w,y);
        if(this.wall[1]) line(x+w,y,x+w,y+w);
        if(this.wall[2]) line(x, y+w, x+w, y+w);
        if(this.wall[3]) line(x, y, x, y+w); 
        if (this.visited) {
            noStroke();
            fill(7, 16, 82);
            rect(x, y, w, w);
        } 
    }

    // if front element
    this.top = () => {
        let x = this.i*w, y=this.j*w;
        
        fill(0,255,0);
        noStroke();
        rect(this.i*w,this.j*w,w,w);
    }

    // get not visited child
    this.getChild = () => {
        let childs = [];
        if(this.j-1>=0 && grid[this.i][this.j-1].isVisited===false) childs.push(grid[this.i][this.j-1]);
        if(this.i+1<row && grid[this.i+1][this.j].isVisited===false) childs.push(grid[this.i+1][this.j]);
        if(this.j+1<col && grid[this.i][this.j+1].isVisited===false) childs.push(grid[this.i][this.j+1]);
        if(this.i-1>=0 && grid[this.i-1][this.j].isVisited===false) childs.push(grid[this.i-1][this.j]);

        let next = undefined;
        if(childs.length>0){
            let po = floor(random(0, childs.length));
            next = childs[po];
        }

        return next;
    }
}

// show board
function showBoard(){
    for(let i=0; i<row; i++){
        for(let j=0; j<col; j++){
            grid[i][j].drawCell();
        }
    }
}

function setup() {
    canvas = createCanvas(ww, hh);
    canvas.position(xmar/2,160);
    
    row = width/w;
    col = height/w;

    grid = new Array(row);
    for(let i=0; i<row; i++){
        grid[i] = new Array(col);
        for(let j=0; j<col; j++){
            grid[i][j] = new Cell(i,j);
        }
    }
    stack.push(grid[0][0]);
    grid[0][0].isVisited = true;

    showBoard();
}



function draw() {
    if(isAlgoRun===false) return;
    frameRate(sp[speed]);
    background(51);
    
    showBoard();

    if(stack.length){
        let current = stack[stack.length-1];
        current.top();

        let next = current.getChild();
        if(next){
            // remove walls according to direction
            if(current.j-next.j==1){
                current.wall[0]=false;
                next.wall[2]=false;
            } else if(current.i-next.i==-1){
                current.wall[1]=false;
                next.wall[3]=false;
            } else if(current.j-next.j==-1){
                current.wall[2]=false;
                next.wall[0]=false;
            } else if(current.i-next.i==1){
                current.wall[3]=false;
                next.wall[1]=false;
            }

            stack.push(next);
            next.isVisited = true;
        } else {
            stack.pop();
        }
    } else {
        noLoop();
    }
}