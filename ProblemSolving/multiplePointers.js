// Multiple Pointers Pattern

// first pair in a sorted array that returns a zero

// naive solution

function sumZero(arr) {
    for (let i = 0 ; i < arr.length ; i++) {
        for (let j = 1 ; j < arr.length ; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i] , arr[j]] ;
            } 
        }
    }
    
    return undefined;
}

console.log('sum zero', sumZero([-3,-2,-1,0,1,2,3]));


// Refractored Code

function sumZeroBetter(arr) {
    let left = 0;
    let right = arr.length - 1;
    while(left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
    return undefined;
}

let array1 = [-4,-3,-2,-1,0,1,10];
console.log('sum zero better', sumZeroBetter(array1));
