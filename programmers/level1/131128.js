/**************************************************/

/* 숫자 짝꿍 */

/**************************************************/

/* 정답 */

/**************************************************/

/* 런타임 에러 */
function solution(X, Y) {
    let numX = X.split('');
    let numY = Y.split('');

    numX = numX.filter((num) => numY.includes(num));
    numY = numY.filter((num) => numX.includes(num));

    let result = numX.length > numY.length ? numY : numX;

    if (!numX.length || !numY.length) return '-1';

    if (!Math.max(...numX, ...numY)) return '0';

    return result.sort((a, b) => b - a).join('');
}

/**************************************************/
