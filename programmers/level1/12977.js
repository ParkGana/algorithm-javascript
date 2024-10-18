/**************************************************/

/* 소수 만들기 */

/**************************************************/

/* 정답 */
function solution(nums) {
    let answer = 0;

    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                const value = nums[i] + nums[j] + nums[k];

                answer++; // 숫자 3개를 뽑아서 더한 경우의 수 추가

                for (let l = 2; l <= Math.floor(value / 2); l++) {
                    if (value % l === 0) {
                        answer--; // 소수인 경우 경우의 수에서 제외
                        break;
                    }
                }
            }
        }
    }

    return answer;
}

/**************************************************/
