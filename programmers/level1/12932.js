/**************************************************/

/* 자연수 뒤집어 배열로 만들기 */

/**************************************************/

/* 정답 */
function solution(n) {
    let answer = [];

    while (n > 0) {
        answer.push(n % 10);
        n = parseInt(n / 10);
    }

    return answer;
}

/**************************************************/
