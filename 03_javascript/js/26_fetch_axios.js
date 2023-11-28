/**
 * fetch api
 * - promise 기반의 비동기통신객체
 * - fetch-비동기작업(네트워크 상의 요청) - then-콜백
 * - json응답에 대한 처리
 *   - json이란? JavasSript Object Notation, 프로그램간의 데이터 교환 언어(약속)
 *   - {"id":"shqkel","company":"KH정보교육원","classroom":"352","cnt":109}
 */
document.querySelector("#btn1").addEventListener('click', () => {
    const url = 'https://asia-northeast3-focal-elf-326215.cloudfunctions.net/user';

    fetch(url)
        .then((response) => {
            //fetch의 첫번째 콜백함수는 응답이 시작되는 순간 호출됨 
            console.log(response);
            return response.json(); // 응답데이터 중 json 추출
        })
        // .then((text) => {
        //     console.log(text, JSON.parse(text)); // string -> js object
        // })
        .then((student) => {
            console.log(student);
            const {id, company, classroom, cnt} = student;
            document.querySelector('#id').innerHTML = id
            document.querySelector('#company').innerHTML = company
            document.querySelector('#classroom').innerHTML = classroom
            document.querySelector('#cnt').innerHTML = cnt
        });

        
});

document.querySelector("#btn2").addEventListener('click', () => {
    const url = 'https://api.github.com/users/hjh705';
    fetch(url)
        .then((response) => response.json())
        .then((user) => {
            // console.log(user);
            const {avatar_url} = user;
            console.log(avatar_url);

            const img = document.createElement('img');
            img.src = avatar_url;
            img.style = 'width: 200px; border-radius:50%;';
            document.querySelector(".img-wrapper").append(img);
        });
});

/**
 * axios
 * - 내부적으로 XMLHttpRequest 객체를 promise 기반으로 사용하도록 하는 js라이브러리
 * - fetch대비 응답데이터를 추출하기 간단
 * - 그 외 편의기능 제공 
 */
document.querySelector("#btn3").addEventListener('click', () => {
    const url = 'https://asia-northeast3-focal-elf-326215.cloudfunctions.net/user';
    axios(url)
        .then((response) => {
            console.log(response);
            const {data : {id, company, classroom, cnt}} = response;
            document.querySelector('#id').innerHTML = id
            document.querySelector('#company').innerHTML = company
            document.querySelector('#classroom').innerHTML = classroom
            document.querySelector('#cnt').innerHTML = cnt
        });
});

/**
 * 1. .img-wrapper>img 추가하기
 * 2. load된지 3초 후에 제거하기
 */
document.querySelector("#btn4").addEventListener('click', () => {
    const url = 'https://api.github.com/users/hjh705';
    // axios(url) 
    axios.get(url) // get방식 전송
    // .then((response) => {
    //     console.log(response);
    // })
    .then(({data : {avatar_url}}) => new Promise((resolve) => {
        console.log(avatar_url);
        const img = document.createElement('img');
        img.src = avatar_url;
        img.style = 'width: 200px; border-radius:50%;';
        img.onload = () => resolve(img);
        document.querySelector(".img-wrapper").append(img);
        // img.onload = () => {
        //     setTimeout(() => img.remove(), 3000);
        // }
    })) 
    .then((img) => {
        setTimeout(() => img.remove(), 3000);
    })
});