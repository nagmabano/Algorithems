// frequency pattern

// check if the two strings are anagram 

function validAnagram(str1 , str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for (let i = 0 ; i < str1.length ; i++) {
        frequencyCounter1[str1[i]] = (frequencyCounter1[str1[i]] || 0) + 1;
    }
    console.log(frequencyCounter1);
    for (let i = 0 ; i < str2.length ; i++) {
        frequencyCounter2[str2[i]] = (frequencyCounter2[str2[i]] || 0) + 1;
    }
    console.log(frequencyCounter2);

    for (let key of Object.keys(frequencyCounter1)) {
        if (!(key in frequencyCounter2)) {
            return false;
        }
        if (frequencyCounter1[key] !== frequencyCounter2[key]) {
            return false;
        }
    }
    
    return true;
}

console.log('anagram', validAnagram('texttwisttime', 'timetwisttext'));

function validAnagramBetter(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    let obj = {};

    for (let i = 0 ; i < str1.length ; i++) {
        let letter = str1[i];
        obj[letter] ? obj[letter] += 1 : obj[letter] = 1;
    }

    for (let i = 0 ; i < str2.length ; i++) {
        let letter = str2[i];
        if (!obj[letter]) {
            return false;
        } else {
            obj[letter] -= 1;
        }
    }

    return true;
}

console.log('better anagram', validAnagramBetter('texttwisttime', 'timetwisttext'));
