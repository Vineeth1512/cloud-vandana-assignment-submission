
/**
 * 
  Take a sentence as an input and reverse every word in that sentence.
     Example - This is a sunny day > shiT si a ynnus yad.
 */
const inputSentence = "This is a sunny day";
console.log(inputSentence);
const reversedSentence = reverseSentence(inputSentence);
console.log(reversedSentence);

function reverseSentence(sentence) {
    let reversedSentence = '';
    let word = '';
    let isSpace = true;

    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === ' ') {
            reversedSentence += ' ';
            isSpace = true;
        } else {
            word = sentence[i] + word;
            if (isSpace) {
                isSpace = false;
            }
            if (i === sentence.length - 1 || sentence[i + 1] === ' ') {
                reversedSentence += word;
                word = '';
            }
        }
    }
    return reversedSentence;
}


/**
 * B. Perform sorting of an array in descending order.
 */

const arr = [3, 5, 2, 6, 4, 1, 9, 8];
console.log("Before Descending : " + arr);

for (var i = 0; i < arr.length; i++) {
    var temp = 0;
    for (var j = i + 1; j < arr.length; j++) {
        if (arr[i] < arr[j]) {
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
console.log("After Descending : " + arr);
