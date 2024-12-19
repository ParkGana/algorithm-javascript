/**************************************************/

/* 덧칠하기 */

/**************************************************/

/* 정답 */

/**************************************************/

/* 시간 초과 */
function solution(n, m, section) {
    let answer = 0;

    while (section.length > 0) {
        const start = section[0] + m - 1 > n ? n - m + 1 : section[0];
        const end = section[0] + m - 1 > n ? n : section[0] + m - 1;

        answer++;

        section = section.filter((num) => num < start || num > end);
    }

    return answer;
}

/**************************************************/
