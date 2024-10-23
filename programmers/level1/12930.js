/**************************************************/

/* 이상한 문자 만들기 */

/**************************************************/

/* 정답 */
function solution(s) {
    let answer = '';

    const words = s.split(' ');

    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            answer += j % 2 ? words[i][j].toLowerCase() : words[i][j].toUpperCase();
        }

        if (i < words.length - 1) answer += ' ';
    }

    return answer;
}

/**************************************************/
