let par = new Array(rows);

function bfs(){
    function find_path(){
        let q = [];
        
        for(let i=0; i<rows; i++){ par[i] = new Array(cols); }

        q.push([start[0],start[1]]);
        div_update(start[0],start[1],"#B243FFBF");
        status[start[0]][start[1]] = 2;
        par[start[0]][start[1]] = [-1,-1];
        
        while(q.length !=0){
            let r=q[0][0], c=q[0][1];

            q.shift();
            div_update(r,c,"#00BEDABF");

            if(r==end[0] && c==end[1]){
                
                // show path
                let r=end[0], c=end[1];
                while(r!=-1 && c!=-1){
                    div_update(r,c,"yellow");
                    let or=r;
                    r = par[r][c][0];
                    c = par[or][c][1];
                }
                
                return;
            }
            if(c+1<cols && status[r][c+1]==0){
                q.push([r,c+1]);
                div_update(r,c+1,"#B243FFBF");
                status[r][c+1] = 2;
                par[r][c+1] = [r,c];
            }
            if (r+1<rows && status[r+1][c]==0){
                q.push([r+1,c]);
                div_update(r+1,c,"#B243FFBF");
                status[r+1][c] = 2;
                par[r+1][c] = [r,c];
            }
            if(c-1>=0 && status[r][c-1]==0){
                q.push([r,c-1]);
                div_update(r,c-1,"#B243FFBF");
                status[r][c-1] = 2;
                par[r][c-1] = [r,c];
            }
            if(r-1>=0 && status[r-1][c]==0){
                q.push([r-1,c]);
                div_update(r-1,c,"#B243FFBF");
                status[r-1][c] = 2;
                par[r-1][c] = [r,c];
            }
        }
    }
    find_path();
    
}