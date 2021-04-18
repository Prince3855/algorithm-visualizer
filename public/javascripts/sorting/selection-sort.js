// Selection Sort Algorithm
async function selection_sort() {

    for (var i = 0; i < array_size - 1; i++) {
        var minIdx = i+1;
        div_update(i, div_height[i], "red");//Color update
        for (var j = i+1; j < array_size; j++) {
            div_update(j, div_height[j], "red");//Color update
            await getDelay();
            if (div_height[j] < div_height[minIdx]) {
                div_update(j, div_height[j], "black");//Color update
                div_update(minIdx, div_height[minIdx], "blue");//Color update

                minIdx = j;
            }
            else{
                div_update(j, div_height[j], "blue");//Color update
            }
            
        }
        if(div_height[i]>div_height[minIdx]){
            var swp = div_height[minIdx];
            div_height[minIdx] = div_height[i];
            div_height[i] = swp;
            await getDelay();
            div_update(minIdx, div_height[minIdx], "red");//Height update
            div_update(i, div_height[i], "red");//Height update
            await getDelay();
           await getDelay();
        }
   
        div_update(i, div_height[i], "green");//Color update
        div_update(minIdx, div_height[minIdx], "blue");//Color update
    }
    div_update(array_size-1, div_height[array_size-1], "green");//Color update

}