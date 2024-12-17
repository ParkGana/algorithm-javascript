/**************************************************/

/* 옹알이 (2) */

/**************************************************/

/* 정답 */
function solution(babbling) {
    let answer = 0;
    const words = ['aya', 'ye', 'woo', 'ma'];

    for (let babble of babbling) {
        let index = 1;
        let lastWord = '';

        while (index <= babble.length) {
            const word = babble.slice(0, index);

            if (words.includes(word)) {
                if (lastWord === word) break;

                lastWord = word;
                babble = babble.slice(index);
                index = 1;
            } else {
                index++;
            }
        }

        if (!babble.length) answer++;
    }

    return answer;
}

/**************************************************/

/* 참고 */
function solution(babbling) {
    const babbles = ['aya', 'ye', 'woo', 'ma'];

    return babbling.reduce((possible, babble) => {
        for (let i = 0; i < babbles.length; i++) {
            if (babble.includes(babbles[i].repeat(2))) return possible;
        }

        for (let i = 0; i < babbles.length; i++) {
            babble = babble.split(babbles[i]).join(' ').trim();
        }

        if (babble) return possible;

        return possible + 1;
    }, 0);
}

/**************************************************/
