/**************************************************/

/* 핸드폰 번호 가리기

/**************************************************/

// 정답
function solution(phone_number) {
    const cover = '*'.repeat(phone_number.length - 4);
    const view = phone_number.slice(-4);

    return cover + view;
}

/**************************************************/

// 참고 1
function solution(phone_number) {
    return phone_number.slice(phone_number.length - 4).padStart(phone_number.length, '*');
}

// 참고 2
function solution(phone_number) {
    const arr = [...phone_number].fill('*', 0, phone_number.length - 4);

    return arr.join('');
}

/**************************************************/
