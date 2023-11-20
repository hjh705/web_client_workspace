/**
 * 짧은 조건문
 * - (조건식) && (실행문) : true 일 때만 실행
 * - (조건식) || (실행문) : false 일 때만 실행 
 * - 실행문에는 return문은 작성불가 (if문 사용할 것)
 */
function test1(){
    const num = Number(prompt("정수를 입력하세요", 10));
    console.log(num);

    // true && true - 우항검사
    // true && false - 우항검사
    // false && true
    // false && false

    // true || true 
    // true || false 
    // false || true - 우항검사
    // false || false - 우항검사
    
    // && || 를 함께 쓰면 if/else문과 같다 
    num % 2 == 0 && alert("짝수입니다");
    num % 2 == 0 || alert("홀수입니다");

    // null || (실행문)
    // false || (실행문)
    // 원하는 요소를 한번만 추가하고 싶을 때 사용. null일 때 추가 + 다시 누르면 null이 아니게 됨
    document.querySelector("#foo")
        || (document.body.innerHTML += '<div id="foo">🥶</div>');
}

/**
 * ||
 */
function test2() {
    // const a = 0; <- b의 값인 3이 대입
    const a = 10; // 값이 존재하므로 10이 대입
    const b = 3;
    const c = a || b; // a 가 존재해서 true로 평가될 시 a를 대입, a가 존재하지 않아서 false로 평가될 시 b를 대입 

    console.log(c);

    //#foo 객체 또는 #bar객체를 변수 some에 대입
    const some = document.querySelector("#foo") || document.querySelector("bar");
    console.log(some);
}