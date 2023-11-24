/**
 * window
 * - 브라우저 최상위 객체
 * - 탭별로 하나씩 존재함
 * - BOM Browser Object Model - navigator, history, screen, ...
 * - DOM Document Object Model - document
 * - Javascript Object
 * - ...
 */
const test1 = () => {
    console.log(window);
};

/**
 * open
 * - 새 창(탭/팝업)을 여는 함수
 * - 새 창의 window객체를 반환. 해당 창에 대한 제어가능
 */
const test2 = () => {
    // open(url, name, spec)
    // const newWindow = open('01_hellojs.html', 'hellojs', '');
    const newWindow = open('01_hellojs.html', 'hellojs', 'width = 500, height = 300, top = 400, left = 400');
    // const newWindow = open('01_hellojs.html', 'hellojs', '_self'); // 현재 탭을 대체
    console.log(newWindow);

    setTimeout(() => {
        // newWindow.close();
        newWindow.alert('🐶🐶🐶🐶🐶🐶');
        newWindow.document.write('<h1>🐥🐥🐥🐥</h1>');
    }, 3000); // 3초 후 진행될 행동 설정 

};

/**
 * Time API - setTimeout 
 * - milli초 후에 callback 함수를 실행
 * - js의 시간은 쓰레드 스케쥴링에 의해 늘어질 수 있다.(정확한 시간이 아님)
 */
const test3 = () => {
    const timeoutId = setTimeout(()=>{
        alert('🐣🐣🐣');
    }, 1000);
    console.log(timeoutId);
};

(() => {
    setTimeout(() => {
        console.log('회원가입 후 더 많은 혜택을 누리세');
    }, 5000);
})();

/**
 * setInterval(callbackFunction,millis)
 * - millis초 후에 callbackFunction을 실행
 * - millis초 간격으로 callbackFunction을 실행
 * - clearInterval(id)로 취소하기 전까지 실행
 */
let intervalId
const test4 = () => {
    let i = 1;
    intervalId = setInterval(() =>{
        console.log(i++);
    }, 1000);
    console.log(intervalId, '번 인터벌이 등록되었습니다.');
};

/**
 * 사용자 타이머
 */
let timeoutId;
const test5 = () => {
    const message = document.querySelector('#message');
    const sec = document.getElementById('sec');
    console.log(message);
    console.log(sec);

    // 유효성검사
    if(!message.value || !sec.value) {
        alert('유효한 값을 입력하세')
        return;
    }

    const messageVal = message.value;
    timeoutId = setTimeout(()=>{
        alert(messageVal);
    }, sec.value * 1000);
    console.log(timeoutId, '번 타이머가 설정되었습니다.')

    // 초기화
    message.value = '';
    sec.value = '';
};

const test6 = () => {
    if(timeoutId){
        clearTimeout(timeoutId);
        alert('타이머가 취소되었습니다')
    }
};

/**
 * 초시계
 */
const f = (n) => n < 10 ? '0' + n : n; // 시간 10의 자리가 비었을 때 0을 출력하기 위함 
const clock = () => {
    const d = new Date();
    const hh = f(d.getHours());
    const mm = f(d.getMinutes());
    const ss = f(d.getSeconds());
    // console.log(`${hh}:${mm}:${ss}`);
    return `${hh}:${mm}:${ss}`;
};

const displayClock =() => document.querySelector("#clock-display").innerHTML = clock(); 
// 새로고침시 창이 1초 후에 뜨는걸 방지하기 위해서 interval 전에 미리 실행시켜놔야함 
displayClock();
setInterval(displayClock,1000);