/**************************************************/

/* 신고 결과 받기 */

/**************************************************/

/* 정답 */
function solution(id_list, report, k) {
    // 중복 신고 제거 (한 유저가 동일한 유저를 여러번 신고해도 1회로 처리)
    report = Array.from(new Set(report));

    const send = {}; // 신고한 내역 { 신고한 user : [신고 당한 user1, 신고 당한 user2, ...] }
    const receive = {}; // 신고 당한 내역 { 신고 당한 user : 신고 당한 횟수 }
    const result = {}; // 결과 데이터 { user : 처리 결과 메일을 받은 횟수 }

    id_list.forEach((id) => {
        send[id] = [];
        receive[id] = 0;
        result[id] = 0;
    });

    report.forEach((repo) => {
        send[repo.split(' ')[0]].push(repo.split(' ')[1]);
        receive[repo.split(' ')[1]]++;
    });

    id_list.forEach((id) => {
        for (let i = 0; i < send[id].length; i++) {
            receive[send[id][i]] >= k && result[id]++;
        }
    });

    return Object.values(result);
}

/**************************************************/

/* 시간 초과 */
function solution(id_list, report, k) {
    // [ 예상 원인 ]
    // filter()는 순회를 하면서 조건에 맞는 요소를 찾는 메서드
    // 최대 200,000의 길이를 가진 report를 매번 순회하는 것은 바람직하지 않음

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
