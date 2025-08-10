let arr = [1,2,3,4,5];
let n = 2;

function chunkArray(arr,n){
    let result = [];

    if(arr.length == 0)
        return result;

    let index = 0

    while(index < arr.length){
        let tempArr = [];        

        for(let i=1;i<=n;i++){
            tempArr.push(arr[index]);
            index++;
        
            if(index>=arr.length)
                break;
        }

        result.push(tempArr);
    }
    
    return result;
}

let resultArr = chunkArray(arr,n);
console.log(resultArr);