/**************************************************/

/* 기사단원의 무기 */

/**************************************************/

/* 정답 */
function solution(number, limit, power) {
    let answer = 0;

    for (let i = 1; i <= number; i++) {
        let divisor = 1;

        for (let j = 1; j <= Math.floor(i / 2); j++) {
            if (i % j === 0) {
                divisor++;
            }
        }

        answer += divisor > limit ? power : divisor;
    }

    return answer;
}

/**************************************************/
