/**************************************************/

/* 음양 더하기 */

/**************************************************/

/* 정답 */
function solution(absolutes, signs) {
    let answer = 0;

    for (let i = 0; i < absolutes.length; i++) {
        answer += (signs[i] ? 1 : -1) * absolutes[i];
    }

    return answer;
}

/**************************************************/
