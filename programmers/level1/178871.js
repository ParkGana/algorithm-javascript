/**************************************************/

/* 달리기 경주 */

/**************************************************/

/* 정답 */

/**************************************************/

/* 시간 초과 */
function solution(players, callings) {
    for (let overPlayer of callings) {
        let overIndex = players.indexOf(overPlayer);
        let frontPlayer = players[overIndex - 1];

        players[overIndex] = frontPlayer;
        players[overIndex - 1] = overPlayer;
    }

    return players;
}

/**************************************************/
