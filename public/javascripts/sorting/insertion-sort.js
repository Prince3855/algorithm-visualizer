function insertion_sort()
{
    st_delay=0;

    for(var j=0;j<array_size;j++)
    {
        div_update(j,div_height[j],"yellow");//Color update

        var key= div_height[j];
        var i=j-1;
        while(i>=0 && div_height[i]>key)
        {
            div_update(i,div_height[i],"red");//Color update
            div_update(i+1,div_height[i+1],"red");//Color update

            div_height[i+1]=div_height[i];

            div_update(i,div_height[i],"red");//Height update
            div_update(i+1,div_height[i+1],"red");//Height update
    
            div_update(i,div_height[i],"green");//Color update
            if(i==(j-1))
            {
                div_update(i+1,div_height[i+1],"yellow");//Color update
            }
            else
            {
                div_update(i+1,div_height[i+1],"green");//Color update
            }
            i-=1;
        }
        div_height[i+1]=key;
        div_update(i+1,div_height[i+1],"yellow");//Color update
        div_update(i+1,div_height[i+1],"yellow");//Color update
        div_update(i+1,div_height[i+1],"yellow");//Color update
        div_update(i+1,div_height[i+1],"yellow");//Color update
        div_update(i+1,div_height[i+1],"green");//Color update

        // for(var t=0;t<j;t++)
        // {
        //     div_update(t,div_height[t],"green");//Color update
        // }
    }
    div_update(j-1,div_height[j-1],"green");//Color update

}
