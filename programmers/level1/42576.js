/**************************************************/

/* 완주하지 못한 선수 */

/**************************************************/

/* 정답 1 */
function solution(participant, completion) {
    let answer = '';

    participant.sort();
    completion.sort();

    for (let i = 0; i < participant.length; i++) {
        if (participant[i] !== completion[i]) {
            answer = participant[i];
            break;
        }
    }

    return answer;
}

/* 정답 2 */
function solution(participant, completion) {
    participant.sort();
    completion.sort();

    return participant.find((player, index) => player !== completion[index]);
}

/**************************************************/
