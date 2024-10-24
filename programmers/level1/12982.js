/**************************************************/

/* 예산 */

/**************************************************/

/* 정답 */
function solution(d, budget) {
    let amount = 0;

    d.sort((a, b) => a - b);

    for (let i = 0; i < d.length; i++) {
        amount += d[i];
        if (amount > budget) return i;
    }

    return d.length;
}

/**************************************************/

/* 참고 */
function solution(d, budget) {
    d.sort((a, b) => a - b);

    const count = d.reduce((count, price) => {
        return count + ((budget -= price) >= 0);
    }, 0);

    return count;
}

/**************************************************/
