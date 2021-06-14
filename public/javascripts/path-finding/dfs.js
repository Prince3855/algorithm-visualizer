function dfs(){
    function find_path(){
        let st = [];
        let par = new Array(rows);
        for(let i=0; i<rows; i++){
            par[i] = new Array(cols);
        }

        st.push([start[0],start[1]]);
        par[start[0]][start[1]] = [-1,-1];
        
        while(st.length !=0){
            let r=st[st.length-1][0], c=st[st.length-1][1];
            status[r][c] = 2;
            
            
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
                st.push([r,c+1]);
                par[r][c+1] = [r,c];
                div_update(r,c+1,"#B243FFBF");
                div_update(r,c,"#00BEDABF");
            }
            else if (r+1<rows && status[r+1][c]==0){
                st.push([r+1,c]);
                par[r+1][c] = [r,c];
                div_update(r+1,c,"#B243FFBF");
                div_update(r,c,"#00BEDABF");
            }
            else if(c-1>=0 && status[r][c-1]==0){
                st.push([r,c-1]);
                par[r][c-1] = [r,c];
                div_update(r,c-1,"#B243FFBF");
                div_update(r,c,"#00BEDABF");
            }
            else if(r-1>=0 && status[r-1][c]==0){
                st.push([r-1,c]);
                par[r-1][c] = [r,c];
                div_update(r-1,c,"#B243FFBF");
                div_update(r,c,"#00BEDABF");
            } else {
                st.pop();
                div_update(r,c,"#B243FFBF");
                // div_update(r,c,"#00BEDABF");
                div_update(r,c,"#e1e1e1");
            }
        }
    }
    find_path();
}