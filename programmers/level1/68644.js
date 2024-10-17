/**************************************************/

/* 두 개 뽑아서 더하기 */

/**************************************************/

/* 정답 */
function solution(numbers) {
    const sumNumbers = new Set();

    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            sumNumbers.add(numbers[i] + numbers[j]);
        }
    }

    return Array.from(sumNumbers).sort((a, b) => a - b);
}

/**************************************************/
