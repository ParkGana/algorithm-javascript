/**************************************************/

/* 최대공약수와 최소공배수 */

/**************************************************/

/* 정답 */
function solution(n, m) {
    let answer = [];
    let divisor = 1;
    let num = 2;

    for (let i = 2; i <= Math.floor(Math.max(n, m) / 2); i++) {
        if (n % i === 0 && m % i === 0) {
            divisor = Math.max(divisor, i);
        }
    }

    while (n >= num && m >= num) {
        if (n % num === 0 && m % num === 0) {
            answer.push(num);
            n /= num;
            m /= num;
            num = 2;
        } else {
            num++;
        }
    }

    const multiple = [...answer, n, m].reduce((acc, current) => {
        return acc * current;
    }, 1);

    return [divisor, multiple];
}

/**************************************************/
