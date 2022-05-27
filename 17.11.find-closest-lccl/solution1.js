/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var findClosest = function (words, word1, word2) {
    let arr1 = [], arr2 = []

    for (let i = 0; i < words.length; i++) {
        if (words[i] == word1) {
            arr1.push(i)
        }
        if (words[i] == word2) {
            arr2.push(i)
        }
    }
    let ans = 100001

    for (let num1 of arr1) {
        for (let num2 of arr2) {
            ans = Math.min(Math.abs(num1 - num2), ans)
        }
    }

    return ans
}