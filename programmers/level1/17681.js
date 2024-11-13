/**************************************************/

/* [1차] 비밀지도 */

/**************************************************/

/* 정답 */
function solution(n, arr1, arr2) {
    let answer = [];

    for (let i = 0; i < n; i++) {
        const one = arr1[i].toString(2).padStart(n, '0');
        const two = arr2[i].toString(2).padStart(n, '0');

        let password = '';

        for (let j = 0; j < n; j++) {
            password += one[j] === '1' || two[j] === '1' ? '#' : ' ';
        }

        answer.push(password);
    }

    return answer;
}

/**************************************************/
