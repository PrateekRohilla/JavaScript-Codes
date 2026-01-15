//find first occurence of element
function firstOCC(arr, ele){
    for(let i=0;i<arr.length;i++)
        if(arr[i] == ele)
            return i;
}


//find last occurence of element
function lastOCC(arr,ele){
    for(let i=arr.length-1;i>-1;i--)
        if(arr[i] == ele)
            return i;
}


//find all indexes where element appears
function allIndex(arr, ele){

    let res = [];

    for(let i=0;i<arr.length;i++)
        if(arr[i] == ele)
            res.push(i);

    return res;
}




let arr = [6,7,4,5,7,5,2,3,2,3,4,5,3];
console.log(allIndex(arr,5));