/**************************************************/

/* 나누어 떨어지는 숫자 배열 */

/**************************************************/

/* 정답 */
function solution(arr, divisor) {
    let answer = arr.filter((num) => num % divisor === 0);

    if (!answer.length) {
        return [-1];
    }

    answer.sort((a, b) => a - b);

    return answer;
}

/**************************************************/
