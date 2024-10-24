/**************************************************/

/* 가장 가까운 같은 글자 */

/**************************************************/

/* 정답 */
function solution(s) {
    let answer = [];

    for (let i = 0; i < s.length; i++) {
        let result = -1;

        for (let j = i - 1; j >= 0; j--) {
            if (s[j] === s[i]) {
                result = i - j;
                break;
            }
        }

        answer.push(result);
    }

    return answer;
}

/**************************************************/

/* 참고 */
function solution(s) {
    let answer = [];

    for (let i = 0; i < s.length; i++) {
        const lastIndex = s.slice(0, i).lastIndexOf(s[i]);

        answer.push(lastIndex < 0 ? -1 : i - lastIndex);
    }

    return answer;
}

/**************************************************/
