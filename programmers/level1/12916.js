/**************************************************/

/* 문자열 내 p와 y의 개수 */

/**************************************************/

/* 정답 */
function solution(s) {
    s = s.toLowerCase();

    return s.replaceAll('p', '').length === s.replaceAll('y', '').length;
}

/**************************************************/
