//find element using binary search
function binarySearch(arr, ele){

    let low = 0, high = arr.length-1;
    let mid;

    while(low <= high){
        mid = (low+high)/2;

        if(arr[mid] == ele)
            return mid;

        else if(arr[mid] < ele)
            low = mid+1;

        else
            high = mid-1;
    }

    return -1;
}







let arr = [2,4,5,8,80,90,100];
console.log(binarySearch(arr,100));