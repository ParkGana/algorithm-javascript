/**************************************************/

/* 하샤드 수 */

/**************************************************/

/* 정답 */
function solution(x) {
    let answer = 0;

    for (let number of x.toString().split('')) {
        answer += Number(number);
    }

    return x % answer === 0;
}

/**************************************************/
