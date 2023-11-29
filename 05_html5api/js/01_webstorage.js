const key = document.querySelector('#key');
const value = document.querySelector('#value');

/**
 * Web Storage
 * - 웹브라우저에 key/value 형식으로 데이터를 보관하는 기술
 * - cookie/indexeddb 등과 유사
 * - 저장된 정보를 절대 서버로 전송하지 않아 보안상 유리
 * 
 * - Local Storage : 삭제하기 전까지 영구보관 
 * - Session Storage : 서버 접속한 동안만 보관(브라우저 닫으면 제거)
 */
document.querySelector('#btn1').onclick = () => {
    //window 하위에서 객체별로 관리 
    // console.log(localStorage);
    // console.log(sessionStorage);

    //유효성 검사
    if(!key.value || !value.value){
        alert('key/value를 작성해주세요🙀');
        return;
    }
    //저장
    localStorage.setItem(key.value, value.value);

    //초기화
    key.value = '';
    value.value = '';
};

document.querySelector('#btn2').onclick = () => {
    //유효성검사
    if(!key.value){
        alert('키를 작성해주세요');
        return;
    };
    //조회
    const retrieved = localStorage.getItem(key.value);
    if(retrieved) {
        value.value = retrieved;
    } else {
        alert('해당 키 값은 존재하지 않습니다')
        value.value = '';
    }
}

document.querySelector('#btn3').onclick = () => {
    //유효성 검사
    if(!key.value){
        alert('키를 작성해주세요')
        return;
    }
    //삭제
    localStorage.removeItem(key.value);

    //초기화
    key.value = '';
    value.value = '';
}

//전체삭제
document.querySelector('#btn4').onclick = () => localStorage.clear(); 

/**
 * 객체 배열 저장
 */
document.querySelector('#btn5').onclick = () => {
    const obj = {
        username : 'honggd',
        id : 12341351,
        married : true
    };
    // localStorage.setItem('obj', obj) // obj.toString() 호출 결과로 저장
    //json문자열로 변환 후 localStorage에 저장 : JSON.stringify
    localStorage.setItem('obj', JSON.stringify(obj));

    //localStorage에 json문자열을 가져옴 
    const objValue = localStorage.getItem('obj');
    console.log(objValue, typeof objValue);
    // {"username":"honggd","id":12341351,"married":true} string

    //json문자열을 다시 js객체로 변환 : JSON.parse
    const obj2 = JSON.parse(objValue);
    console.log(obj2, typeof obj2);
    //{username: 'honggd', id: 12341351, married: true} 'object'


    const arr = ['a', 'b', 'c']; // a,b,c string
    // localStorage.setItem('arr', arr);
    localStorage.setItem('arr', JSON.stringify(arr));

    const arr2 = JSON.parse(localStorage.getItem('arr'));
    console.log(arr2, typeof arr2); // ['a', 'b', 'c'] 'object'

    const pet = {
        name : '구리',
        colors : ['white', 'brown'],
        owner : {
            name : '홍길동',
            tel : '01012344321'
        }
    };
    localStorage.setItem('pet', JSON.stringify(pet));
    const pet2 = JSON.parse(localStorage.getItem('pet'));
    console.log(pet2);
}; 

/**
 * submit 핸들러 (유효성검사)
 */
const frm = document.guestbookFrm;
const name = frm.name;
const content = frm.content;

document.guestbookFrm.onsubmit = (e) => {
    //이름 유효성 검사
    if(!/^[A-Za-z0-9가-힣 ]{2,}$/.test(name.value)){
        alert('유효한 이름을 작성해주세요')
        return false; // = e.preventDefault(); return;
    }

    //내용 유효성 검사
    if(!/^.{2,}$/.test(content.value)){
        alert('내용을 작성해주세요')
        return false;
    }
};

/**
 * localStorage에 저장
 */
const saveGuestbook = () => {

    // localStorage에 저장
    //guestbooks로 저장된 배열이 있다면 그걸 사용, 없다면 새 배열 생성
    const guestbooks = JSON.parse(localStorage.getItem('guestbooks')) || []; // 앞의 것 결과가 undefined 일 시 우항을 대입
    guestbooks.push(new Guestbook(name.value, content.value))
    console.log(guestbooks);

    localStorage.setItem('guestbooks', JSON.stringify(guestbooks));
    //초기화
    // name.value = '';
    // content.value = '';
    frm.reset();
    
};

class Guestbook {
    constructor(name, content, createdAt = Date.now()) {
        this.name = name;
        this.content = content;
        this.createdAt = createdAt;
    }
}

/**
 * localStorage guestbooks를 화면에 출력하기
 * - guestbook -> tr
 * - 일시 : millis -> Date -> mm/dd hh:mi
 * - 방명록을 작성한 후 테이블이 화면에 표시되어야함 
 */

const renderGuestbooks = () => {
    //localStorage에서 guestbooks 읽어오기
    const guestbooks = JSON.parse(localStorage.getItem("guestbooks")) || [];

    //tr태그로 변환하기 -> tbody 추가하기
    // const tbody = document.querySelector('table#tb-guestbooks tbody');
    // tbody.innerHTML = ''; // 초기화

    // guestbooks.foreach((guestbook, index) => {
    //     const {name, content, createdAt} = guestbook;
    //     console.log(name, content, createdAt);
    //     const tr = `
    //     <tr>
    //         <td>${name}</td>
    //         <td>${content}</td>
    //         <td>${convertToDateTime(createdAt)}</td>
    //     </tr>`
    //     tbody.innerHTML += tr;
    // })

    document.querySelector("table#tb-guestbook tbody").innerHTML = 
    guestbooks.reduce((html, {name, content, createdAt}, index) => {
        return`
        ${html}
        <tr>
            <td>${name}</td> 
            <td>${content}</td> 
            <td>${convertToDateTime(createdAt)}</td> 
        </tr>`;
    }, "");
};

const f = (n) => n < 10 ? '0' + n : n; // 숫자가 1자리일 때 앞에 0을 붙여주는 함수

const convertToDateTime = (millis) => {
    const d = new Date(millis);
    const mm = f(d.getMonth() + 1);
    const dd = f(d.getDate());
    const hh = f(d.getHours());    
    const mi = f(d.getMinutes());
    return `${mm} / ${dd} ${hh}:${mi}`;
}

//페이지 로딩 시 출력 
// renderGuestbooks();