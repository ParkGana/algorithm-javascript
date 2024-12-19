/**************************************************/

/* 체육복 */

/**************************************************/

/* 정답 */
function solution(n, lost, reserve) {
    const reset = lost.filter((item) => reserve.includes(item));

    lost = lost.filter((item) => !reset.includes(item)).sort((a, b) => a - b);
    reserve = reserve.filter((item) => !reset.includes(item)).sort((a, b) => a - b);

    for (let i = 0; i < lost.length; i++) {
        if (reserve.includes(lost[i] - 1)) {
            reserve = reserve.filter((item) => item !== lost[i] - 1);
        } else if (reserve.includes(lost[i] + 1)) {
            reserve = reserve.filter((item) => item !== lost[i] + 1);
        } else {
            n--;
        }
    }

    return n;
}

/**************************************************/
