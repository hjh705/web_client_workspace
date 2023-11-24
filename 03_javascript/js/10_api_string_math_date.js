/**
 * String
 * - "", '', `` 로 리터럴을 감싸서 표현
 * - String 내장객체에서 제공하는 api 사용
 */
function test1(){
    const str = "Apple Samsung PineApple";
    console.log(str);
    console.log(str.length); //23

    // for(let i = 0; i < str.length; i++){
    //     console.log(str[i], str.charAt(i));
    // }

    //대소문자 변경을 해도 실제 값을 변경시켜서 출력하는건 아님
    console.log(str.toLowerCase()); // Immutable
    console.log(str.toUpperCase()); // Immutable
    console.log(str);

    console.log(str.indexOf('Sam')) // 6
    console.log(str.indexOf('Apple')) // 0
    console.log(str.lastIndexOf('Apple')) // 18

    //substring(start, end)
    //substr(start, length)
    console.log(str.substring(6,9)) // 9번째는 미포함
    console.log(str.substr(6,3))
    console.log(str.substring(6))

    //replace(search, newStr)
    //replaceAll(search, newStr): ECMA 2021에 추가 
    console.log(str.replace('Apple', '사과'));
    console.log(str.replaceAll('Apple', '사과'));

    console.log(str.split(' '));// ['Apple', 'Samsung', 'PineApple'];

}

/**
 * @실습문제 : 사용자 입력값에서 알파벳 개수 세기
 * - prompt 통해 임의의 문자열을 받고, 알파벳 개수를 세서 출력하기
 */ 
function test2(){
    const input = prompt("문자열을 입력해주세요", "qwer");
    let count = 0;
    if(!input){
        alert("유효한 문자열을 입력해주세요");
        return;
    }
    
    for(let i = 0; i < input.length; i++){
        console.log(input[i]);
       if(input[i] >= "A" && input[i] <= "Z"){
        count++
       }
       if(input[i] >= "a" && input[i] <="z"){
        count++
       }
    }
    // const check = /[a-zA-Z]/;
    // for(let i = 0; i < input.length; i++){
    //    if(check.input[i]){
    //     count++;
    //    }
    // }
    alert(`입력하신 문자열 ${input}에서 알파벳의 개수는 ${count}개 입니다 🥶`);


    // let count = 0;
    // const check = /[a-zA-Z]/;
    // for(let i = 0; i < input.length; i++){
    //     console.log(input.charAt(i));
       
    // }
    
    // alert(count);
}

/**
 * Math
 * - random
 * - ceil
 * - round
 * - floor
 * - trunc
 */
function test3(){
    //0.0 이상 1.0 미만의 실수를 반환
    console.log(Math.trunc(Math.random() * 10 + 1)); 

    console.log(Math.ceil(12.34)); 
    console.log(Math.round(12.5)); 
    console.log(Math.floor(12.34)); 
    console.log(Math.trunc(12.34)); // 소수점 이하 버림

    console.log(Math.floor(-3.4), Math.trunc(-3.4)); // -4, -3

    //123.456 반올림해서 123.46이 출력되게 하기
    console.log(Math.round(123.456 * 100)/100);
}

/**
 * @실습문제 : 난수목록태그 만들고, 짝수만 컬러변경하기
 * - ul#nums 하위의 li태그에 난수대입
 * - 짝수인 경우 컬러변경
 * - 매번 버튼 클릭시 숫자/컬러가 새로 지정되어야만함 
 */

function test4(){
    const list = document.querySelectorAll("ul#nums li")
    for(let i = 0; i < list.length; i++){
        list[i].style.color = 'initial'; // initial | inherit 초기화 
        const n = Math.trunc(Math.random() * 100 + 1)
        list[i].innerText = n;

        n % 2 == 0 && (list[i].style.color = 'red');
    }    
}

/**
 * Date
 * - 날짜/시각을 관리하는 객체
 * - 기본적으로 시스템시각을 읽어와서 사용함
 */
function test5(){
    const now = new Date();//new 생성자함수 호출 
    console.log(now);
    
    console.log(now.getFullYear());
    console.log(now.getMonth() + 1);//0~11을 반환해서 +1을 해줘야함 
    console.log(now.getDate());

    console.log(now.getHours());
    console.log(now.getMinutes());
    console.log(now.getSeconds());

    console.log(Date.now()); ///UTC Time/초 (Epoch Time)

    const date = new Date(1700460427129); // UTC Time으로 Date객체 생성하기
    console.log(date);

    //특정 날짜/시각 객체
    const someday = new Date(1991,6,5,12,30);//월은 0부터 시작되는거 인지하고 주의
    console.log(someday);
}

/**
 * start, end 시각을 밀리초로 각각 구해서 차이를 계산하기
 */
function test6(){
    // const start = Date.now();
    // foo();
    // const end = Date.now();
    // console.log((end - start), 'ms');

    console.time('Test');
    foo();
    console.timeEnd('Test');
}

function foo(){
    let sum = 0;
    for(let i = 0; i < 10000; i++)
        sum += i;
        console.log(sum);
}