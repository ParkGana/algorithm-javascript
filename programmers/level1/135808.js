/**************************************************/

/* 과일 장수 */

/**************************************************/

/* 정답 */
function solution(k, m, score) {
    let answer = 0;

    score.sort((a, b) => a - b);

    for (let i = score.length - m; i >= 0; i -= m) {
        answer += score[i] * m;
    }

    return answer;
}

/**************************************************/
