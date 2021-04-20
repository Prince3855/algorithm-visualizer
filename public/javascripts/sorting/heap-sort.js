function swap(i,j)
{
    div_update(i,div_height[i],"red");//Color update
    div_update(j,div_height[j],"red");//Color update

    var temp=div_height[i];
    div_height[i]=div_height[j];
    div_height[j]=temp;

    div_update(i,div_height[i],"red");//Height update
    div_update(j,div_height[j],"red");//Height update

    div_update(i,div_height[i],"blue");//Color update
    div_update(j,div_height[j],"blue");//Color update
}

function max_heapify(n,i)
{
    var largest=i;
    var l=2*i+1;
    var r=2*i+2;

    if(l<n && div_height[l]>div_height[largest])
    {
        if(largest!=i)
        {
            div_update(largest,div_height[largest],"blue");//Color update
        }

        largest=l;

        div_update(largest,div_height[largest],"red");//Color update
    }

    if(r<n && div_height[r]>div_height[largest])
    {
        if(largest!=i)
        {
            div_update(largest,div_height[largest],"blue");//Color update
        }

        largest=r;

        div_update(largest,div_height[largest],"red");//Color update
    }

    if(largest!=i)
    {
        swap(i,largest);

        max_heapify(n,largest);
    }
}

function heap_sort()
{
    st_delay=0;

    // create MAX-HEAP
    for(var i=Math.floor(array_size/2)-1;i>=0;i--)
    {
        max_heapify(array_size,i);
    }

    for(var i=array_size-1;i>0;i--)
    {
        swap(0,i);
        div_update(i,div_height[i],"green");//Color update
        div_update(i,div_height[i],"yellow");//Color update

        max_heapify(i,0);

        div_update(i,div_height[i],"blue");//Color update
        div_update(i,div_height[i],"green");//Color update
    }
    div_update(i,div_height[i],"green");//Color update
}