/**************************************************/

/* 직사각형 별찍기 */

/**************************************************/

/* 정답 */
process.stdin.setEncoding('utf8');

process.stdin.on('data', (data) => {
    const n = data.split(' ')[0];
    const m = data.split(' ')[1];

    for (let i = 0; i < m; i++) {
        console.log('*'.repeat(n));
    }
});

/**************************************************/
