/**************************************************/

/* 없는 숫자 더하기 */

/**************************************************/

/* 정답 */
function solution(numbers) {
    let sum = 0;

    for (let i = 0; i < 10; i++) {
        if (!numbers.includes(i)) {
            sum += i;
        }
    }

    return sum;
}

/**************************************************/

/* 참고 */
function solution(numbers) {
    let sum = 0;

    for (let number of numbers) {
        sum += number;
    }

    return 45 - sum;
}

/**************************************************/
