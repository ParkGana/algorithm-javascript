/**************************************************/

/* 시저 암호 */

/**************************************************/

/* 정답 */
function solution(s, n) {
    // 아스키코드 (A ~ Z = 65 ~ 90 / a ~ z = 97 ~ 122)

    let answer = '';

    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            answer += s[i];
            continue;
        }

        let ascii = s[i].charCodeAt();

        // 대문자인 경우
        if (ascii >= 65 && ascii <= 90) {
            ascii += n;
            if (ascii > 90) ascii -= 26;
        }
        // 소문자인 경우
        else if (ascii >= 97 && ascii <= 122) {
            ascii += n;
            if (ascii > 122) ascii -= 26;
        }

        answer += String.fromCharCode(ascii);
    }

    return answer;
}

/**************************************************/

/* 참고 */
function solution(s, n) {
    let answer = '';

    let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lower = 'abcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < s.length; i++) {
        if (s[i] == ' ') {
            answer += ' ';
            continue;
        }

        let category = upper.includes(s[i]) ? upper : lower;
        let index = category.indexOf(s[i]) + n;

        if (index > category.length - 1) index -= category.length;

        answer += category[index];
    }

    return answer;
}

/**************************************************/
