/**************************************************/

/* 추억 점수 */

/**************************************************/

/* 정답 */
function solution(name, yearning, photo) {
    let answer = [];
    const yearn = new Map();

    for (let i = 0; i < name.length; i++) {
        yearn.set(name[i], yearning[i]);
    }

    for (let picture of photo) {
        let score = 0;

        for (let person of picture) {
            score += yearn.get(person) ?? 0;
        }

        answer.push(score);
    }

    return answer;
}

/**************************************************/
