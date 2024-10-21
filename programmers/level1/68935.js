/**************************************************/

/* 3진법 뒤집기 */

/**************************************************/

/* 정답 */
function solution(n) {
    let answer = 0;

    const origin = n.toString(3);
    const reverse = origin.split('').reverse().join('');

    let multiply = 1;

    for (let i = reverse.length; i > 0; i--) {
        answer += reverse.substring(i - 1, i) * multiply;
        multiply *= 3;
    }

    return answer;
}

/**************************************************/

/* 참고 */
function solution(n) {
    const origin = n.toString(3);
    const reverse = origin.split('').reverse().join('');

    return parseInt(reverse, 3);
}

/**************************************************/
