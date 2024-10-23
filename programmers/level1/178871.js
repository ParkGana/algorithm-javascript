/**************************************************/

/* 달리기 경주 */

/**************************************************/

/* 정답 */
function solution(players, callings) {
    let ranks = {};

    players.forEach((player, index) => {
        ranks[player] = index;
    });

    for (let overPlayer of callings) {
        let overIndex = ranks[overPlayer];
        let frontPlayer = players[overIndex - 1];

        players[overIndex] = frontPlayer;
        players[overIndex - 1] = overPlayer;

        ranks[overPlayer] -= 1;
        ranks[frontPlayer] += 1;
    }

    return players;
}

/**************************************************/

/* 시간 초과 */
function solution(players, callings) {
    // [ 예상 원인 ]
    // indexOf()는 순회를 하면서 인자로 받은 값과 동일한 요소를 찾는 메서드
    // 최대 50,000의 길이를 가진 players를 매번 순회하는 것은 바람직하지 않음

    for (let overPlayer of callings) {
        let overIndex = players.indexOf(overPlayer);
        let frontPlayer = players[overIndex - 1];

        players[overIndex] = frontPlayer;
        players[overIndex - 1] = overPlayer;
    }

    return players;
}

/**************************************************/
