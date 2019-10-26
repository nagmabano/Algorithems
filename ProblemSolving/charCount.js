// function to count the number of characters


function charCount(str){
    let obj = {};
    for(let char of str) {
        if (isAlphanumeric(char)) {
            char = char.toLowerCase();
            if (obj[char] > 0){
                obj[char]++;
            } else {
                obj[char] = 1;
            }
        }
    }
    return obj;
}

function isAlphanumeric(char) {
    let code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) &&
        !(code > 64 && code < 91) &&
        !(code > 96 && code < 123)){
            return false;
        }
    return true;
}

console.log(charCount("hello World 9!!!"));

// function to compare two arrays where the element of an array is square of the element of another array

function isSame(arr1 , arr2) {

    let flag = false;

    if (arr1.length === arr2.length) {
        for (let element of arr1) {
            if (arr2.indexOf(element*element) > -1) {
                flag = true;
            } else {
                flag = false;
                break;
            }
        }
    }
    

    if (flag === true) {
        return true;
    }

    return false;
}


arr1 = [1,2,3,2];
arr2 = [1,4,9];

console.log(isSame(arr1, arr2));