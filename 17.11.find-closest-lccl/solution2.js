/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var findClosest = function (words, word1, word2) {
    const len = words.length
    let ans = len
    let index1 = -1, index2 = -1

    for (let i = 0; i < len; i++) {
        if (words[i] == word1) {
            index1 = i
        }
        if (words[i] == word2) {
            index2 = i
        }

        if (index1 >= 0 && index2 >= 0) {
            ans = Math.min(Math.abs(index1 - index2), ans)
        }
    }

    return ans
}