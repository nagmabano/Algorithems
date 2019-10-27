// max sum of subarray

function maxSubarraySum(arr, n) {
    if (n > arr.length) {
        return undefined;
    }
    let max = -Infinity;
    for (let i = 0 ; i < arr.length - n + 1; i++) {
        let temp = 0;
        for (let j = 0 ; j < n ; j++) {
            temp += arr[i+j];
        }

        if (temp > max) {
            max = temp;
        }
    }
    return max;
}

arr1 = [1,2,3,3,4,7,2,1,0];

console.log('subarray sum max', maxSubarraySum(arr1,3));

