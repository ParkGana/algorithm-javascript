/**************************************************/

/* 바탕화면 정리 */

/**************************************************/

/* 정답 */
function solution(wallpaper) {
    let answer = [[], [], [], []];

    wallpaper.forEach((item, index) => {
        if (item.includes('#')) {
            answer[0].push(index);
            answer[1].push(item.indexOf('#'));
            answer[2].push(index + 1);
            answer[3].push(item.lastIndexOf('#') + 1);
        }
    });

    return [Math.min(...answer[0]), Math.min(...answer[1]), Math.max(...answer[2]), Math.max(...answer[3])];
}

/**************************************************/
