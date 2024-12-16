/**************************************************/

/* 로또의 최고 순위와 최저 순위 */

/**************************************************/

/* 정답 */
function solution(lottos, win_nums) {
    const correct = lottos.filter((num) => num === 0 || win_nums.includes(num));

    const minCorrect = correct.filter((num) => num !== 0).length;
    const maxCorrect = correct.length;

    const high = maxCorrect < 2 ? 6 : 6 - maxCorrect + 1;
    const low = minCorrect < 2 ? 6 : 6 - minCorrect + 1;

    return [high, low];
}

/**************************************************/

/* 참고 */
function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1];

    const minCount = lottos.filter((num) => win_nums.includes(num)).length;
    const zeroCount = lottos.filter((num) => !num).length;

    return [rank[minCount + zeroCount], rank[minCount]];
}

/**************************************************/
