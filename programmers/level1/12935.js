/**************************************************/

/* 제일 작은 수 제거하기 */

/**************************************************/

/* 정답 */
function solution(arr) {
    arr = arr.filter((num) => num !== Math.min(...arr));

    return arr.length ? arr : [-1];
}

/**************************************************/

/* 참고 */
function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)), 1);
    
    return arr.length ? arr : [-1];
}

/**************************************************/
