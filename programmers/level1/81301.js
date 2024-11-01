/**************************************************/

/* 숫자 문자열과 영단어 */

/**************************************************/

/* 정답 */
function solution(s) {
    let answer = s
        .replaceAll('zero', '0')
        .replaceAll('one', '1')
        .replaceAll('two', '2')
        .replaceAll('three', '3')
        .replaceAll('four', '4')
        .replaceAll('five', '5')
        .replaceAll('six', '6')
        .replaceAll('seven', '7')
        .replaceAll('eight', '8')
        .replaceAll('nine', '9');

    return Number(answer);
}

/**************************************************/

/* 참고 */
function solution(s) {
    let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

    for (let i = 0; i < numbers.length; i++) {
        s = s.split(numbers[i]).join(i);
    }

    return Number(s);
}

/**************************************************/
