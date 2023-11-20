//전역
let a = 10;
   console.log(a);
function foo(){
    //지역
    let b = 20;
    console.log(b);

     //전역변수 접근
    a = 30;
}

if(true){
    //지역
    let c = 99;
    console.log(c);
}

for(let i = 0; i < 5; i++){
    //지역
    console.log(i);
}

let j;
for(j = 0; j < 5; j++){
    //지역
    console.log(j);
}

/**
 * 변수 사용시 사용하는 키워드 
 * - const 블럭스코프. 상수 선언시
 * - let 블럭스코프. 변수 선언시
 * - var 함수스코프(함수 블럭만 인정). 변수 선언시. 더 이상 사용하진 않음 
 */

function test(){
    var a = 10;
    var a = 20; // 같은 변수 이름으로 두번 선언해도 문법 오류가 발생하지 않음
    console.log(a);

    const b = 123;
    // b = 456; Uncaught TypeError: Assignment to constant variable.

    let c = 1;
    c = 2;
    console.log(c);

    // let c = asd; Uncaught SyntaxError: Identifier 'c' has already been declared (at 07_scope.js:49:9)

}