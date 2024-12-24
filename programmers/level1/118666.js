/**************************************************/

/* 성격 유형 검사하기 */

/**************************************************/

/* 정답 */
function solution(survey, choices) {
    let answer = '';
    let score = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };

    for (let i = 0; i < survey.length; i++) {
        const types = survey[i].split('');

        if (choices[i] < 4) score[types[0]] += Math.abs(choices[i] - 4);
        if (choices[i] > 4) score[types[1]] += Math.abs(choices[i] - 4);
    }

    answer += score['R'] < score['T'] ? 'T' : 'R';
    answer += score['C'] < score['F'] ? 'F' : 'C';
    answer += score['J'] < score['M'] ? 'M' : 'J';
    answer += score['A'] < score['N'] ? 'N' : 'A';

    return answer;
}

/**************************************************/
