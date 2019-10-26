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
    let tempArr1 = [...arr1];
    let tempArr2 = [...arr2];

    if (arr1.length === arr2.length) {
        for (let element of arr1) {
            if (tempArr2.indexOf(element*element) > -1) {
                let index1 = tempArr1.indexOf(element);
                let index2 = tempArr2.indexOf(element*element);
                flag = true;
                tempArr1.splice(index1, 1);
                tempArr2.splice(index2, 1)
                
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


arr1 = [1,2,1];
arr2 = [4,4,1];

console.log(isSame(arr1, arr2));

// a better approach for isSame() by reducing the time complexity

function isSameBetter(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    console.log(frequencyCounter1);

    for(let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    console.log(frequencyCounter2);

    for (let key in frequencyCounter1) {
        if (!((key * key) in frequencyCounter2)) {
            return false;
        }
        if (frequencyCounter1[key] !== frequencyCounter2[key * key]) {
            return false;
        }
    }
    
    return true;
    
}

a = [1,1,2,5];
b = [4,1,25,1];

console.log(isSameBetter(a, b));
