/**
 * navigator
 * - 브라우저(항해사) 정보 제공 객체
 */
const test1 = () => {
    console.log(navigator);
    console.log(navigator.userAgent);
};

/**
 * location
 * - 주소창과 관련된 기능을 제공
 * 
 */
const test2 = () => {
    console.log(location);
    // 페이지 이동
    // location.href = "http://naver.com"; 

    // 페이지 새로고침
    location.reload();
};

/**
 * history 
 * - 방문기록 관련 기능제공
 * - 뒤로가기 / 앞으로가기 / 새로고침
 */
const test3 = () => {
    console.log(history);
};

/**
 * screen
 * - 브라우저가 실행중인 모니터에 대한 정보 제공
 * 
 */
const test4 = () => {
    console.log(screen);
    // availHeight 가용높이
    // availLeft 가용offset(왼쪽)
    // availTop 가용offset(위)
    // availWidth 가용너비
    // height 모니터 높이(px)
    // width 모니터 너비(px)
    const width = 500;
    const height = 300;
    const top = (screen.height - height) / 2+ screen.availTop;
    const left = (screen.width - width) / 2 + screen.availLeft; 
    //마지막 screen.availTop|Left 는 다중모니터 사용했을때도 센터값이 나오도록 해주는 값

    const popup = open("", "", `width=${width}, height = ${height}, top=${top}, left=${left}`);
};