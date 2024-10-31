/**************************************************/

/* 약수의 개수와 덧셈 */

/**************************************************/

/* 정답 */
function solution(left, right) {
    let answer = 0;

    for (let i = left; i <= right; i++) {
        if (i === 1) {
            answer -= i;
            continue;
        } else {
            let count = 2;

            for (let j = 2; j <= Math.floor(i / 2); j++) {
                if (i % j === 0) count++;
            }

            answer = count % 2 ? answer - i : answer + i;
        }
    }

    return answer;
}

/**************************************************/

/* 참고 */
function solution(left, right) {
    let answer = 0;

    for (let i = left; i <= right; i++) {
        // 제곱근이 정수이면 그 수의 약수의 갯수는 홀수
        answer = Number.isInteger(Math.sqrt(i)) ? answer - i : answer + i;
    }

    return answer;
}

/**************************************************/
