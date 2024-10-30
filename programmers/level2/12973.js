/**************************************************/

/* 짝지어 제거하기 */

/**************************************************/

/* 정답 */
function solution(s) {
    let words = [];

    for (let i = 0; i < s.length; i++) {
        if (i !== 0 && words[words.length - 1] === s[i]) {
            words.pop();
        } else {
            words.push(s[i]);
        }
    }

    return words.length ? 0 : 1;
}

/**************************************************/
