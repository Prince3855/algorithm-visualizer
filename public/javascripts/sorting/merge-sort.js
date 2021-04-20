function merge(start,mid,end)
{
    var p=start,q=mid+1;

    var Arr=[],k=0;

    for(var i=start; i<=end; i++)
    {
        if(p>mid)
        {
            Arr[k++]=div_height[q++];
            div_update(q-1,div_height[q-1],"red");//Color update
        }
        else if(q>end)
        {
            Arr[k++]=div_height[p++];
            div_update(p-1,div_height[p-1],"red");//Color update
        }
        else if(div_height[p]<div_height[q])
        {
            Arr[k++]=div_height[p++];
            div_update(p-1,div_height[p-1],"red");//Color update
        }
        else
        {
            Arr[k++]=div_height[q++];
            div_update(q-1,div_height[q-1],"red");//Color update
        }
    }

    for(var t=0;t<k;t++)
    {
        div_height[start++]=Arr[t];
        div_update(start-1,div_height[start-1],"green");//Color update
    }
}

function merge_partition(start,end)
{
    if(start < end)
    {
        var mid=Math.floor((start + end) / 2);
        div_update(mid,div_height[mid],"yellow");//Color update

        merge_partition(start,mid);
        merge_partition(mid+1,end);

        merge(start,mid,end);
    }
}
function merge_sort(){
    st_delay=0;
    merge_partition(0,array_size-1);
}