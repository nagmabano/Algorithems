// max sum of subarray
// naive solution

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


// sliding window - better solution

function maxSubarraySumBetter(arr, n) {
    if (arr.length < n) {
        return null;
    }
    let tempSum = 0;
    let maxSum = 0;
    for (let i = 0 ; i < n ; i++) {
        tempSum += arr[i];
    }
    maxSum = tempSum;
    for (let i = n ; i < arr.length ; i++) {
        tempSum = tempSum - arr[i - n] + arr[n];
        maxSum = Math.max(tempSum, maxSum);
    }

    return maxSum;

}

arr2 = [1,1,2,3,4,2,1,3];

console.log('subarray sum max better', maxSubarraySum(arr2,3));

