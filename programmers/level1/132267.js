/**************************************************/

/* 콜라 문제 */

/**************************************************/

/* 정답 */
function solution(a, b, n) {
    let answer = 0;

    while (n >= a) {
        n -= a - b;
        answer += b;
    }

    return answer;
}

/**************************************************/
