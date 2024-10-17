/**************************************************/

/* 최소 직사각형 */

/**************************************************/

/* 정답 */
function solution(sizes) {
    let width = 0;
    let height = 0;

    for (let size of sizes) {
        size.sort((a, b) => a - b);

        width = Math.max(width, size[0]);
        height = Math.max(height, size[1]);
    }

    return width * height;
}

/**************************************************/
