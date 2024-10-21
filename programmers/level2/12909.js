/**************************************************/

/* 올바른 괄호 */

/**************************************************/

/* 정답 */
function solution(s) {
    let left = 0;
    let right = 0;

    for (let word of s) {
        word === '(' ? left++ : right++;

        if (left < right) return false;
    }

    return left === right;
}

/**************************************************/
