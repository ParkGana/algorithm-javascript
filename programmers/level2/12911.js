/**************************************************/

/* 다음 큰 숫자 */

/**************************************************/

/* 정답 */
function solution(n) {
    let answer = n + 1;

    const nOneCount = n.toString(2).replaceAll('0', '').length;

    while (1) {
        const answerOneCount = answer.toString(2).replaceAll('0', '').length;

        if (nOneCount === answerOneCount) break;

        answer++;
    }

    return answer;
}

/**************************************************/

/* 참고 1 */
function solution(n) {
    let answer = n + 1;

    const nOneCount = n.toString(2).match(/1/g).length;

    while (1) {
        const answerOneCount = answer.toString(2).match(/1/g).length;

        if (nOneCount === answerOneCount) break;

        answer++;
    }

    return answer;
}

/* 참고 2 */
function solution(n, answer = n + 1) {
    const nOneCount = n.toString(2).match(/1/g).length;
    const answerOneCount = answer.toString(2).match(/1/g).length;

    return nOneCount === answerOneCount ? answer : solution(n, answer + 1);
}

/**************************************************/
