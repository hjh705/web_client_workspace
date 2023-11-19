/**
 * confirm
 * - 확인 true
 * - 취소 false
 */
function test1(){
    const bool = confirm('이 파일을 정말 삭제하시겠습니까?');
    if(bool){
        //삭제
        //...
        alert('파일이 정상적으로 삭제되었습니다.');
    }else{
        //취소
        //...
        alert('파일 삭제를 취소했습니다.');
    }
}
/**
 * prompt
 * - 사용자로부터 한줄입력을 받는 모달(팝업창)
 * - 확인 : 사용자 입력값 반환
 * - 취소 : null 반환
 */
function test2(){
    const name = prompt('당신의 이름은 무엇입니까?', '홍길동');
    console.log(name);
    //boolean 자동형변환
    // - 값이 있는 경우, true 변환 : "abc", 1234
    // - 값이 없는 경우, false 변환 : null, undefined, 0, 0.0
    if(name){
        //정상입력한 경우
        console.log("안녕하세요", name, "님");
        alert(`안녕하세요 ${name}님`);// ' 아니고 ` 임 (옵션+물결)
    }else{
        //취소한 경우
        alert("이름을 정상적으로 입력해주세요");
    }

}