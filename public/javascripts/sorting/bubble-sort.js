
// Bubble sort algorithm
function bubble_sort() {
    st_delay=0;

    for (var i = 0; i < array_size - 1; i++) {
        for (var j = 0; j < array_size - i - 1; j++) {

            if (div_height[j] > div_height[j + 1]) {
                div_update(j, div_height[j], "red");//Color update
                div_update(j + 1, div_height[j + 1], "red");//Color update

                var temp = div_height[j];
                div_height[j] = div_height[j + 1];
                div_height[j + 1] = temp;
                
                div_update(j, div_height[j], "red");//Height update
                div_update(j + 1, div_height[j + 1], "red");//Height update

            }

            div_update(j, div_height[j], "blue");//Color updat
        }
        div_update(j, div_height[j], "green");//Color update
    }
    div_update(0, div_height[0], "green");//Color update

}