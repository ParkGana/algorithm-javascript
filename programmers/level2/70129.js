/**************************************************/

/* 이진 변환 반복하기 */

/**************************************************/

/* 정답 */
function solution(s) {
    let count = 0;
    let zero = 0;

    while (s !== '1') {
        zero += s.replaceAll('1', '').length;
        s = s.replaceAll('0', '').length.toString(2);
        count++;
    }

    return [count, zero];
}

/**************************************************/
