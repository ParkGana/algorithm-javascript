/**************************************************/

/* 수박수박수박수박수박수? */

/**************************************************/

/* 정답 */
function solution(n) {
    let str = '';

    for (let i = 0; i < n; i++) {
        str += i % 2 === 0 ? '수' : '박';
    }

    return str;
}

/**************************************************/

/* 참고 */
function solution(n) {
    const str = '수박'.repeat(n / 2) + (n % 2 ? '수' : '');

    return str;
}

/**************************************************/
