/**************************************************/

/* 가운데 글자 가져오기 */

/**************************************************/

/* 정답 */
function solution(s) {
    while (s.length > 2) {
        s = s.slice(1, s.length - 1);
    }

    return s;
}

/**************************************************/

/* 참고 */
function solution(s) {
    const centerIndex = Math.floor(s.length / 2);

    if (s.length % 2 === 1) {
        return s.slice(centerIndex, centerIndex + 1);
    } else {
        return s.slice(centerIndex - 1, centerIndex + 1);
    }
}

/**************************************************/
