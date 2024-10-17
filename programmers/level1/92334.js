/**************************************************/

/* 신고 결과 받기 */

/**************************************************/

/* 정답 */

/**************************************************/

/* 시간 초과 */
function solution(id_list, report, k) {
    // id_list와 동일한 길이의 배열 선언 및 모든 요소를 0으로 초기화
    let result = Array.from({ length: id_list.length }, () => 0);

    // 중복 신고 제거 (한 유저가 동일한 유저를 여러번 신고해도 1회로 처리)
    report = Array.from(new Set(report));

    for (let i = 0; i < id_list.length; i++) {
        // id_list[i] 유저가 신고한 내역
        const userReport = report.filter((item) => item.split(' ')[0] === id_list[i]);

        for (let j = 0; j < userReport.length; j++) {
            // id_list[i] 유저가 신고한 j번째 유저가 신고 당한 횟수
            const reportCount = report.filter((item) => {
                return item.split(' ')[1] === userReport[j].split(' ')[1];
            });

            // 신고 당한 횟수가 k번 이상일 경우
            if (reportCount.length >= k) {
                result[i]++;
            }
        }
    }

    return result;
}

/**************************************************/
