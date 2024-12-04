/**************************************************/

/* 폰켓몬 */

/**************************************************/

/* 정답 */
function solution(nums) {
    const count = Math.floor(nums.length / 2);
    const set = new Set(nums).size;

    return Math.min(count, set);
}

/**************************************************/
