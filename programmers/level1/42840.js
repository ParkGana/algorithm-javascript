/**************************************************/

/* 모의고사 */

/**************************************************/

/* 정답 */
function solution(answers) {
    let answer = [];

    const choice = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ];

    let result = [0, 0, 0];

    for (let i = 0; i < answers.length; i++) {
        for (let j = 0; j < choice.length; j++) {
            if (answers[i] === choice[j][i % choice[j].length]) {
                result[j]++;
            }
        }
    }

    for (let i = 0; i < result.length; i++) {
        if (Math.max(...result) === result[i]) {
            answer.push(i + 1);
        }
    }

    return answer;
}

/**************************************************/
