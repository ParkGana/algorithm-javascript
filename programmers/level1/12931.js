/**************************************************/

/* 자릿수 더하기 */

/**************************************************/

/* 정답 */
function solution(n) {
    let answer = 0;

    for (let number of n.toString().split('')) {
        answer += Number(number);
    }

    return answer;
}

/**************************************************/

/* 참고 */
function solution(n) {
    let answer = 0;

    while (n > 0) {
        answer += n % 10;
        n = Math.floor(n / 10);
    }

    return answer;
}

/**************************************************/
