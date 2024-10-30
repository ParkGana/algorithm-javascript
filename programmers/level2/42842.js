/**************************************************/

/* 카펫 */

/**************************************************/

/* 정답 */
function solution(brown, yellow) {
    let divisor = [];
    let match = [];

    // 약수 구하기
    for (let i = 3; i <= Math.floor((brown + yellow) / 3); i++) {
        if (!((brown + yellow) % i)) divisor.push(i);
    }

    // width-height 값이 될 수 있는 쌍 구하기
    for (let i = 0; i < divisor.length; i++) {
        for (let j = i; j < divisor.length; j++) {
            if (divisor[i] * divisor[j] === brown + yellow) {
                match.push([divisor[j], divisor[i]]);
                break;
            }
        }
    }

    // 조건에 맞는 width-height 쌍 추출하기
    for (let i = 0; i < match.length; i++) {
        const width = match[i][0];
        const height = match[i][1];

        if (2 * width + 2 * (height - 2) === brown && (width - 2) * (height - 2) === yellow) {
            return match[i];
        }
    }
}

/**************************************************/
