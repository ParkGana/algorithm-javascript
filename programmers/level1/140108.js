/**************************************************/

/* 문자열 나누기 */

/**************************************************/

/* 정답 */
function solution(s) {
    let answer = 0;

    let same = 0;
    let different = 0;
    let x = s.slice(0, 1);

    for (let i = 0; i < s.length; i++) {
        x === s.slice(i, i + 1) ? same++ : different++;

        // same과 different가 같아진 경우
        if (same === different) {
            answer++;
            same = 0;
            different = 0;
            x = s.slice(i + 1, i + 2);
        }
        // 더 이상 읽을 글자가 없는 경우
        else if (i === s.length - 1) {
            answer++;
        }
    }

    return answer;
}

/**************************************************/
