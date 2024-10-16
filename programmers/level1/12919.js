/**************************************************/

/* 서울에서 김서방 찾기

/**************************************************/

// 정답
function solution(seoul) {
    const index = seoul.findIndex((name) => name === 'Kim');

    return `김서방은 ${index}에 있다`;
}

/**************************************************/

// 참고 1
function solution(seoul) {
    const index = seoul.indexOf('Kim');

    return `김서방은 ${index}에 있다`;
}

// 참고 2
function solution(seoul) {
    for (let i = 0; i < seoul.length; i++) {
        if (seoul[i] === 'Kim') {
            return `김서방은 ${i}에 있다`;
        }
    }
}

/**************************************************/
