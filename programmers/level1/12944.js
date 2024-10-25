/**************************************************/

/* 평균 구하기 */

/**************************************************/

/* 정답 */
function solution(arr) {
    let answer = 0;

    for (let i = 0; i < arr.length; i++) {
        answer += arr[i];
    }

    return answer / arr.length;
}

/**************************************************/

/* 참고 */
function solution(arr) {
    let answer = arr.reduce((acc, current) => {
        return acc + current;
    }, 0);

    return answer / arr.length;
}

/**************************************************/
