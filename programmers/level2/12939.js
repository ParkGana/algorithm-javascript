/**************************************************/

/* 최댓값과 최솟값 */

/**************************************************/

/* 정답 */
function solution(s) {
    const numbers = s.split(' ');

    return `${Math.min(...numbers)} ${Math.max(...numbers)}`;
}

/**************************************************/