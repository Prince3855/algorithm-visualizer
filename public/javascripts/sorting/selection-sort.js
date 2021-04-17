// Selection Sort Algorithm
async function selection_sort() {

    for (var i = 0; i < array_size - 1; i++) {
        var minIdx = i;
        for (var j = i+1; j < array_size; j++) {

            if (div_height[j] < div_height[minIdx]) {
                div_update(j, div_height[j], "red");//Color update
                div_update(minIdx, div_height[minIdx], "red");//Color update

                minIdx = j;
            }
            await getDelay();
            // div_update(j, div_height[j], "blue");//Color update
        }
        var swp = div_height[minIdx];
        div_height[minIdx] = div_height[i];
        div_height[i] = swp;

        await getDelay();
        div_update(minIdx, div_height[minIdx], "red");//Height update
        div_update(i, div_height[i], "red");//Height update

        div_update(i, div_height[i], "green");//Color update
        div_update(minIdx, div_height[minIdx], "green");//Color update
    }
    div_update(0, div_height[0], "green");//Color update

}