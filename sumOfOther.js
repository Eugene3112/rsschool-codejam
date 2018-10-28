function sumOfOther(arr){
    let result = arr.reduce(function(sum, current) { 
    return sum + current; 
    }, 0); 
        
    let newArr = arr.map(function(current){ 
    return result - current; 
    });
    return newArr;
}


