/**************************************************/

/* 배열의 유사도 */

/**************************************************/

/* 정답 */
function solution(s1, s2) {
    let arr = s1.filter((word) => s2.includes(word));

    return arr.length;
}

/**************************************************/

/* 참고 */
function solution(s1, s2) {
    let count = 0;

    for (let word1 of s1) {
        for (let word2 of s2) {
            if (word1 === word2) {
                count++;
            }
        }
    }

    return count;
}

/**************************************************/
