/**************************************************/

/* 명예의 전당 (1) */

/**************************************************/

/* 정답 */
function solution(k, score) {
    let answer = [];
    let hof = [];

    for (num of score) {
        hof.push(num);
        hof.sort((a, b) => b - a);
        if (hof.length > k) hof.pop();

        answer.push(hof[hof.length - 1]);
    }

    return answer;
}

/**************************************************/

/* 참고 */
function solution(k, score) {
    let answer = [];
    let hof = [];

    answer = score.reduce((acc, current) => {
        hof.push(current);
        hof.sort((a, b) => a - b);
        if (hof.length > k) hof.shift();

        acc.push(hof[0]);

        return acc;
    }, []);

    return answer;
}

/**************************************************/
