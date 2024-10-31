/**************************************************/

/* 내적 */

/**************************************************/

/* 정답 */
function solution(a, b) {
    let answer = 0;

    for (let i = 0; i < a.length; i++) {
        answer += a[i] * b[i];
    }

    return answer;
}

/**************************************************/

/* 참고 */
function solution(a, b) {
    let answer = a.reduce((acc, _, index) => {
        return acc + a[index] * b[index];
    }, 0);

    return answer;
}

/**************************************************/
