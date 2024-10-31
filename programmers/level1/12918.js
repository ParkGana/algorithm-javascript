/**************************************************/

/* 문자열 다루기 기본 */

/**************************************************/

/* 정답 */
function solution(s) {
    if (s.length !== 4 && s.length !== 6) return false;

    for (let word of s.split('')) {
        if (isNaN(word)) return false;
    }

    return true;
}

/**************************************************/

/* 실패 */
function solution(s) {
    // [ 예상 원인 ]
    // s가 0으로만 이루어진 문자열인 경우 숫자로 변환해도 falsy한 값으로 인식

    if (s.length !== 4 && s.length !== 6) return false;

    return !!Number(s);
}

/**************************************************/

/* 실패 */
function solution(s) {
    // [ 예상 원인 ]
    // s가 0x00 형태의 문자열인 경우 숫자로 변환하면 16진수로 인식되어 true 반환

    if (s.length !== 4 && s.length !== 6) return false;

    if (Number(s) === 0) return true;

    return !!Number(s);
}

/**************************************************/
