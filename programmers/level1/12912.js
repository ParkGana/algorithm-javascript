/**************************************************/

/* 두 정수 사이의 합 */

/**************************************************/

/* 정답 */
function solution(a, b) {
    let answer = 0;

    const numbers = [a, b].sort((a, b) => a - b);

    for (let i = numbers[0]; i <= numbers[1]; i++) {
        answer += i;
    }

    return answer;
}

/**************************************************/

/* 참고 */
function solution(a, b) {
    let answer = 0;

    for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
        answer += i;
    }

    return answer;
}

/**************************************************/
