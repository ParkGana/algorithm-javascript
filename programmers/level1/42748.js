/**************************************************/

/* K번째 수

/**************************************************/

// 정답
function solution(array, commands) {
    let answer = [];

    for (let i = 0; i < commands.length; i++) {
        const start = commands[i][0] - 1;
        const end = commands[i][1];
        const index = commands[i][2] - 1;

        const arr = array.slice(start, end).sort((a, b) => a - b);

        answer.push(arr[index]);
    }

    return answer;
}

/**************************************************/
