/**************************************************/

/* 키패드 누르기 */

/**************************************************/

/* 정답 1 */
function solution(numbers, hand) {
    // 배열 사용

    let answer = '';

    const keypad = [
        [1, 3],
        [0, 0],
        [1, 0],
        [2, 0],
        [0, 1],
        [1, 1],
        [2, 1],
        [0, 2],
        [1, 2],
        [2, 2]
    ];

    let left = [0, 3];
    let right = [2, 3];

    for (let i = 0; i < numbers.length; i++) {
        // 1, 4, 7번을 입력하는 경우
        if ([1, 4, 7].includes(numbers[i])) {
            left[0] = keypad[numbers[i]][0];
            left[1] = keypad[numbers[i]][1];
            answer += 'L';
        }
        // 3, 6, 9,번을 입력하는 경우
        else if ([3, 6, 9].includes(numbers[i])) {
            right[0] = keypad[numbers[i]][0];
            right[1] = keypad[numbers[i]][1];
            answer += 'R';
        }
        // 2, 5, 8, 0번을 입력하는 경우
        else {
            const left_path = Math.abs(keypad[numbers[i]][0] - left[0]) + Math.abs(keypad[numbers[i]][1] - left[1]);
            const right_path = Math.abs(keypad[numbers[i]][0] - right[0]) + Math.abs(keypad[numbers[i]][1] - right[1]);

            // 왼손가락의 이동거리가 짧거나, 이동거리가 동일하고 왼손잡이인 경우
            if (left_path < right_path || (left_path === right_path && hand === 'left')) {
                left[0] = keypad[numbers[i]][0];
                left[1] = keypad[numbers[i]][1];
                answer += 'L';
            }
            // 오른손가락의 이동거리가 짧거나, 이동거리가 동일하고 오른손잡이인 경우
            else if (left_path > right_path || (left_path === right_path && hand === 'right')) {
                right[0] = keypad[numbers[i]][0];
                right[1] = keypad[numbers[i]][1];
                answer += 'R';
            }
        }
    }

    return answer;
}

/* 정답 2 */
function solution(numbers, hand) {
    // 객체 사용

    let answer = '';

    const keypad = {
        0: { x: 1, y: 3 },
        1: { x: 0, y: 0 },
        2: { x: 1, y: 0 },
        3: { x: 2, y: 0 },
        4: { x: 0, y: 1 },
        5: { x: 1, y: 1 },
        6: { x: 2, y: 1 },
        7: { x: 0, y: 2 },
        8: { x: 1, y: 2 },
        9: { x: 2, y: 2 }
    };

    let left = { x: 0, y: 3 };
    let right = { x: 2, y: 3 };

    for (number of numbers) {
        // 1, 4, 7번을 입력하는 경우
        if ([1, 4, 7].includes(number)) {
            left.x = keypad[number].x;
            left.y = keypad[number].y;
            answer += 'L';
        }
        // 3, 6, 9번을 입력하는 경우
        else if ([3, 6, 9].includes(number)) {
            right.x = keypad[number].x;
            right.y = keypad[number].y;
            answer += 'R';
        }
        // 2, 5, 8, 0을 입력하는 경우
        else {
            const left_path = Math.abs(keypad[number].x - left.x) + Math.abs(keypad[number].y - left.y);
            const right_path = Math.abs(keypad[number].x - right.x) + Math.abs(keypad[number].y - right.y);

            // 왼손가락의 이동거리가 짧거나, 이동거리가 동일하고 왼손잡이인 경우
            if (left_path < right_path || (left_path === right_path && hand === 'left')) {
                left.x = keypad[number].x;
                left.y = keypad[number].y;
                answer += 'L';
            }
            // 오른손가락의 이동거리가 짧거나, 이동거리가 동일하고 오른손잡이인 경우
            else if (left_path > right_path || (left_path === right_path && hand === 'right')) {
                right.x = keypad[number].x;
                right.y = keypad[number].y;
                answer += 'R';
            }
        }
    }

    return answer;
}

/**************************************************/
