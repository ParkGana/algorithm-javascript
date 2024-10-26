/**************************************************/

/* 배열의 평균값 */

/**************************************************/

/* 정답 */
function solution(numbers) {
    let answer = numbers.reduce((acc, current) => {
        return acc + current;
    }, 0);

    return answer / numbers.length;
}

/**************************************************/
