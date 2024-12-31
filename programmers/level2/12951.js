/**************************************************/

/* JadenCase 문자열 만들기 */

/**************************************************/

/* 정답 */
function solution(s) {
    let answer = '';

    answer = s.toLowerCase();

    for (let i = 0; i < s.length; i++) {
        if (i === 0 || s[i - 1] === ' ') {
            answer = answer.substring(0, i) + s[i].toUpperCase() + answer.substring(i + 1);
        }
    }

    return answer;
}

/**************************************************/

/* 참고 */
function solution(s) {
    let answer = '';

    for (let i = 0; i < s.length; i++) {
        answer += i === 0 || s[i - 1] === ' ' ? s[i].toUpperCase() : s[i].toLowerCase();
    }

    return answer;
}

/**************************************************/
