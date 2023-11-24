/**
 * inline 이벤트속성의 작성내용이 미리 만들어진 핸들러 함수 안에서 실행된다
 * - 핸들러 하나만 등록가능
 */
const test1 = (e) => {
    console.log('🍊')
    console.log(e)
    // console.log(document.querySelector('#btn1').onclick);
    //event 객체 속성에서 ctrl, shift 같은 다른 키도 눌렀는지 t/f로 알 수 있음 
};

document.querySelector("#btn2").onclick = (e) => {
    console.log('🍉');
    console.log(e);
    // console.log(document.querySelector("#btn2").onclick);
};

document.querySelector("#btn2").onclick = (e) => {
    console.log('🍑');
    console.log(e);
};

/**
 * 핸들러 여러개 등록 가능
 */
document.querySelector('#btn3').addEventListener('click', (e)=>{
    console.log('🥐', e);
});
document.querySelector('#btn3').addEventListener('click', (e)=>{
    console.log('🍇', e);
});

/**
 * Event객체
 * - type
 * - target : 이벤트 발생객체
 * - 좌표
 */
document.querySelector('#btn4').onclick = function(e) {
    console.log(e);
    console.log(e.target);
    console.log(e.target.innerHTML);

    //this용법6. 이벤트핸들러(일반함수) 안의 this는 이벤트 발생객체를 가리킨다.
    console.log(this);
    console.log(this == e.target);
};

document.querySelector('#nickname').onfocus = (e) => {
    console.log('#nickname 포커싱되었습니다.');
};
document.querySelector('#nickname').onblur = (e) => {
    console.log('#nickname 포커스를 잃었습니다.');
    //입력값 유효성 검사
    // const value = e.target.value;
    const{target : { value }} = e;
    console.log(value);
    if(!value){
        alert("별칭은 필수입니다.");
        // e.target.focus();
    }
};

/**
 * Key관련 이벤트
 * - keydown 입력값 확인 불가 
 * - keypress 한글 확인 불가
 * - keyup 보통 많이 사용함
 */
document.querySelector('#memo').onkeyup = (e) => {
    // console.log(e); // ex) a키 누르면 key(a) | keycode(65) | code(KeyA)
    console.log(e.target.value);

    //엔터 확인
    if(e.keyCode === 13){
        alert(e.target.value);
    }
};

/**
 * 제출버튼 클릭 -> submit이벤트 -> submit이벤트 핸들러 호출 -> 제출
 * 
 * - 제출방지 event.preventDefault();
 */
const frm = document.signupFrm;
const username = frm.username;
const password = frm.password;
const confirmPassword = frm['confirm-password'];

document.signupFrm.onsubmit = (e) => {
    console.log('submit');
    // console.log(frm, username, password, confirmPassword);

    //아이디검사 (4글자 이상)
    if(username.value.length < 4){
        alert('아이디는 4글자 이상이어야 합니다');
        e.preventDefault();
        return;
    }

    //비밀번호검사 (4글자 이상)
    if(password.value.length < 4){
        alert('비밀번호는 4글자 이상이어야 합니다');
        e.preventDefault();
        return;
    }

    //비밀번호 일치여부 검사
    // if(password.value !== confirmPassword.value){
    //     alert('두 비밀번호가 일치하지 않습니다!');
    //     e.preventDefault();
    //     return;
    // }
    if(notEqualPasswords()){
        e.preventDefault();
    return;
    }
};

const notEqualPasswords = () => {
    const bool = password.value !== confirmPassword.value
    if(bool) {
        alert('두 비밀번호가 일치하지 않습니다!'); 
        password.select(); // 입력값 선택상태
    };
    return bool;
};

// blur 이벤트핸들러 바인딩
confirmPassword.onblur = notEqualPasswords;

const requestSignup = () => {
    console.log('폼 제출 성공')
    // signupFrm의 내용출력 / 초기화
    // ex) honggd/1234 로 회원가입을 요청했습니다 + 초기화

    alert(`${username.value} // ${password.value} 로 회원가입을 요청했습니다`)
    // username.value = '';
    // password.value = '';
    // confirmPassword.value = '';
    frm.reset();
};

/**
 * 이벤트 전파 Event Propagation
 * - bubbling : 자식객체에서 발생한 이벤트는 부모객체로 전파된다 
 */
// document.querySelector('#bubble1').onclick = (e) => {
//     console.log('#bubble1', e);
// };
// document.querySelector('#bubble2').onclick = (e) => {
//     console.log('#bubble2', e);
//     e.stopPropagation(); // 전파중지
// };
// document.querySelector('#bubble3').onclick = (e) => {
//     console.log('#bubble3', e);
// };

document.querySelector("#bubble1").onclick = (e) => {
    switch(e.target.id){
        case 'bubble1' : console.log('#bubble1'); break;
        case 'bubble2' : console.log('#bubble2'); break;
        case 'bubble3' : console.log('#bubble3'); break;
    };
};

/**
 * 임의의 이벤트를 생성
 * - #btn5 -> #btn1 클릭핸들러 호출
 */
document.querySelector('#btn5').onclick = () => {
    // document.querySelector('#btn1').click();
    const event = new MouseEvent('click');
    document.querySelector('#btn1').dispatchEvent(event);
}