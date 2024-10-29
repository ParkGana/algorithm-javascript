/**************************************************/

/* n^2 배열 자르기 */

/**************************************************/

/* 정답 */

/**************************************************/

/* 런타임 에러 */
function solution(n, left, right) {
    // [ 예상 원인 ]
    // n이 최대 n^7이므로 n * n 크기의 2차원 배열을 만들려고 하면 메모리적으로 과부화 발생

    let answer = [];

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            answer.push(i > j ? i : j);
        }
    }

    return answer.slice(left, right + 1);
}

/**************************************************/

/* 시간 초과 */
function solution(n, left, right) {
    let answer = [];

    for (let row = 1; row <= n; row++) {
        for (let col = 1; col <= n; col++) {
            const index = (row - 1) * n + col - 1;

            if (index >= left && index <= right) {
                answer.push(row > col ? row : col);
                continue;
            }

            if (index > right) break;
        }
    }

    return answer;
}

/**************************************************/