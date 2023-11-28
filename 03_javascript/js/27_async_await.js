/**
 * async
 * - 일반함수의 promise화를 지원하는 문법
 */
document.querySelector('#btn1').addEventListener('click', () => {
    const promise = foo();
    console.log(promise);

    promise.then((value) => console.log(value));
});

const foo = async() => 100; // state가 fulfilled, result 가 100인 promise 반환
// const foo = () => new Promise((resolve) => resolve(100)); 와 같다

/**
 * await
 * - async 함수 안에서만 사용할 수 있음
 * - promise 앞에서만 사용 가능함
 * - promiserk fulfilled 될 때까지 대기해서, result 값을 반환해주는 역할 
 */
document.querySelector('#btn2').addEventListener('click', async() => {
    // bar()
    //     .then((value) => console.log(value));
    const value = await bar();
    console.log(value);
});

const bar = () => new Promise((resolve) => {
    // 3초 후에 fulfilled / 100 
    setTimeout(() => resolve('🦑'), 3000);
})

/**
 * Timer API
 */
document.querySelector('#btn3').addEventListener('click', async() => {
    const value = await delay(3000);
    console.log(value);
})

const delay = (millis) => new Promise((resolve) => {
    setTimeout(() => resolve('🥶'), millis);
})

/**
 * DOM
 */
document.querySelector('#btn4').addEventListener('click', async() => {
    await loadScript('js/24_test.js'); // promise가 fulfilled 되기까지(=resolve가 호출될 때 까지) 대기
    test();
});

const loadScript = (src) => new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => resolve();
    document.head.append(script);
});

/**
 * 학생정보 가져오기
 */
document.querySelector('#btn5').addEventListener('click', async() => {
    const url = 'https://asia-northeast3-focal-elf-326215.cloudfunctions.net/user';
    const response = await fetch(url);
    const student = await response.json();
    console.log(student);

})

/**
 * avatar 화면출력, 3초 후에 제거 
 */
document.querySelector('#btn6').addEventListener('click', async() => {
    const url = 'https://api.github.com/users/hjh705';

    const {data : {avatar_url}} = await axios(url);
    console.log(avatar_url);

    const img = document.createElement('img');
    img.src = avatar_url;
    img.style = 'width: 200px; border-radius:50%;';
    document.querySelector('.img-wrapper').append(img);
    
    await new Promise((resolve) => {
        setTimeout(() => resolve(), 3000);
    })
    img.remove();
})