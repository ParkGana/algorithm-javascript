/**************************************************/

/* 문자열 내 마음대로 정렬하기 */

/**************************************************/

/* 정답 */
function solution(strings, n) {
    strings.sort();

    for (let i = 0; i < strings.length; i++) {
        for (let j = strings.length - 1; j > i; j--) {
            if (strings[j][n].charCodeAt() < strings[j - 1][n].charCodeAt()) {
                const temp = strings[j - 1];
                strings[j - 1] = strings[j];
                strings[j] = temp;
            }
        }
    }

    return strings;
}

/**************************************************/
