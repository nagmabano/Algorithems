// number of unique numbers in an array

function countUniqueNumbers(arr) {
    let left = 0;
    let right = 1;
    let count = 0;

    for (let i = 0 ; i < arr.length; i++) {
        if (arr[left] !== arr[right]) {
            count++;
        } 
        left++;
        right++;
    }
    return count;
}

console.log('unique number', countUniqueNumbers([0,1,1,2,2,2,3,5,5,5,8]));


// second way

// fix i and move j
// move i only when j is different
// count will be index of i plus 1

function countUniqueNumbers1(arr) {

    if (arr.length === 0) return 0;

    let left = 0;
    let right = 1;
    for (let i = 0; i < arr.length - 1 ; i++) {
        if (arr[left] === arr[right]) {
            right++;
        } else {
            left++;
            arr[left] = arr[right];
            right++;  
        }
    }
    return left+1;
}

let arr1 = [0,1,1,2,2,2,3,3,3,3,4,4,4,4,4]
console.log('way 2' , countUniqueNumbers1(arr1));

// refractoring above code 

function countUniqueNumbers2 (arr) {

    if (arr.length === 0) return 0;

    let i = 0;
    for (let j = 1 ; j < arr.length ; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
        console.log(i,j);
        
    }
    return i + 1;
}

arr3 = [1,1,1,1,2,2,2,3,3,3,3,3,3,4,4];
console.log('better way', countUniqueNumbers2(arr3));
