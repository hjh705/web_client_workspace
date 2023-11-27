/**
 * 정규표현식 Regular Expression
 * - 문자열에 대해서 유효성검사 / 검색 / 대체 등을 처리하기 위한 표현식 
 * - 조건 / 반복 처리를 내부적으로 진행. 간결하게 작성이 가능하다
 * - 문법 자체 숙지가 어렵다 
 * - 언어 독립적으로 작동
 */
document.querySelector('#btn1').addEventListener('click', () => {
    // 하나의 문자가 숫자인지 검사하는 정규식 (0~9)
    const re = /[0-9]/gi;
    const re2 = new RegExp(/[0-9]/gi);
    const re3 = new RegExp("[0-9]", "gi");

    console.log(re, re2, re3);
    console.dir(re, re2, re3);

    // 정규식 메소드
    // RegExp#test(String) : boolean
    console.log(re.test('abc123'));
    console.log(re.test('abcㅁㄴㅇ'));
    // 문자열 메소드
    // String#split(re): string[]
    console.log("a1b2c3d".split(re)); //(4) ['a', 'b', 'c', 'd']

    //String#replace(re, newString): string
    console.log("abc-123".replace(re, '*')); // abc-***
    //검색된 문자열을 변경해서 대체하고 싶을 때 $&
    console.log("abc1def2ghi".replace(re, '<$&>')); // abc<1>def<2>ghi


    //String#match(re):{} 매칭된 결과를 배열로 반환 
    console.log("a1b2c3d".match(re)); // (3) ['1', '2', '3']


    //String#search(re):number 매칭된 문자열의 인덱스 반환
    console.log("a1b2c3d".search(re)); // 1
    console.log("qweasd".search(re)); // -1
});

/**
 * flags 옵션
 * - g : global 전역비교 수행
 * - i : ignore 대소문자 구분안함
 * - m : multiline 여러줄인 경우 행단위 비교 
 */
document.querySelector('#btn2').addEventListener('click', (e) => {
    const src = 'Javascript jQuery Ajax sass';
    const area = e.target.nextElementSibling;
    area.innerHTML = `<p>${src.replace(/a/, '<mark>$&</mark>')}</p>`;
    area.innerHTML += `<p>${src.replace(/a/g, '<mark>$&</mark>')}</p>`;
    area.innerHTML += `<p>${src.replace(/a/gi, '<mark>$&</mark>')}</p>`;
});

/**
 * anchor
 * - ^ 시작
 * - $ 끝
 */
document.querySelector('#btn3').addEventListener('click', (e) => {
    const src = 'Javascript jQuery Ajax sass xxx';
    const area = e.target.nextElementSibling;

    area.innerHTML = `<p>${src.replace(/j/gi, '<mark>$&</mark>')}</p>`;
    area.innerHTML += `<p>${src.replace(/^j/gi, '<mark>$&</mark>')}</p>`;
    area.innerHTML += `<p>${src.replace(/x/gi, '<mark>$&</mark>')}</p>`;
    area.innerHTML += `<p>${src.replace(/x$/gi, '<mark>$&</mark>')}</p>`;

    const src2 = `Javascript
jQuery
Ajax
sass
xxx`;
    area.innerHTML += `<p>${src2.replace(/^j/gim, '<mark>$&</mark>')}</p>`;
    area.innerHTML += `<p>${src2.replace(/x$/gim, '<mark>$&</mark>')}</p>`;
});

/**
 * 임의의 문자 하나 .
 * - 문자 / 특수문자 / 공백
 * - 개행문자는 처리되지 않음
 */
document.querySelector('#btn4').addEventListener('click', (e) => {
    const re = /^a.b/;
    console.log(re.test('acb')); // true
    console.log(re.test('a b')); // true
    console.log(re.test('a*b')); // true
    console.log(re.test('ab')); // false - a 이후 임의의 문자 후 b가 나와야하는데 공백이라 false
    console.log(re.test('a\nb')); // false

    //in다음에 한글자로 끝나는 문자열 검사
    const re2 = /in.$/;
    console.log(re2.test('going')); // true
    console.log(re2.test('inner')); // false
    console.log(re2.test('holydayin')); // false
});

/**
 * [] 한글자에 대한 값목록
 * - ascii code 기반으로 범위 설정 가능 
 */
document.querySelector('#btn5').addEventListener('click', (e) => {
    const src = 'ABCDajEfghij 에베벱베벱ㅇㅇㅇㅇ아ㅏㅏㅏㅏ 120120 !@$%!@#() \n\t';
    const area = e.target.nextElementSibling;

    area.innerHTML = `<p>${src.replace(/[aj]/gi, '<mark>$&</mark>')}</p>`
    area.innerHTML += `<p>${src.replace(/[^aj]/gi, '<mark>$&</mark>')}</p>` // [^aj] 가 아닌 문자
    area.innerHTML += `<p>${src.replace(/^[aj]/gi, '<mark>$&</mark>')}</p>` // ^[aj] 로 시작

    area.innerHTML += `<p>${src.replace(/[0123456789]/gi, '<mark>$&</mark>')}</p>`;
    area.innerHTML += `<p>${src.replace(/[0-9]/gi, '<mark>$&</mark>')}</p>`;
    area.innerHTML += `<p>${src.replace(/[abcdefghijklmnopqrstuvwxyz]/g, '<mark>$&</mark>')}</p>`;
    area.innerHTML += `<p>${src.replace(/[a-z]/g, '<mark>$&</mark>')}</p>`;
    area.innerHTML += `<p>${src.replace(/[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/g, '<mark>$&</mark>')}</p>`;
    area.innerHTML += `<p>${src.replace(/[A-Z]/g, '<mark>$&</mark>')}</p>`;
    area.innerHTML += `<p>${src.replace(/[0-9A-Za-z]/g, '<mark>$&</mark>')}</p>`;
    // area.innerHTML += `<p>${src.replace(/[A-z]/g, '<mark>$&</mark>')}</p>` ascii 코드상 순서기 때문에 이렇게하면 특문까지 포함됨
    area.innerHTML += `<p>${src.replace(/[가-힣]/g, '<mark>$&</mark>')}</p>`;
    area.innerHTML += `<p>${src.replace(/[ㄱ-ㅎㅏ-ㅣ가-힣]/g, '<mark>$&</mark>')}</p>`;// ㄱ~ㅎ, ㅏ~ㅣ, 가~힣

    //유의사항
    // 반전을 의미하는 ^로 쓰려면 맨 첫번째자리에 써줘야만 한다 
    // [A-Z^Q] 같은건 존재안함 
    // [A-PR-Z]

    //알파벳 소문자로 시작하는 문자열 검사
    const re = /^[a-z]/;
    console.log(re.test('abcde')); // true
    console.log(re.test('aㅏㅏㅏㅏㅏ')); // true
    console.log(re.test('ABCDE')); // false
    console.log(re.test('가나다')); // false

    //숫자 4자리인지 검사
    const re2 = /^[0-9][0-9][0-9][0-9]$/;
    console.log(re2.test('1234')); // true
    console.log(re2.test('5678')); // true
    console.log(re2.test('12345')); // false
    console.log(re2.test('ABab')); // false
    console.log(re2.test('AB12')); // false
    console.log(re2.test('12')); // false

});

/**
 * 단축문자(문자하나)
 * - \d digit 숫자
 * - \w word 영문자, 숫자, _ 
 * - \s whitespace 공백 개행 탭 포함 
 * 
 * 반전
 * - \D 숫자 아닌 문자
 * - \W 영문자, 숫자, _ 아닌 문자
 * - \S 공백 개행 탭 아닌 문자
 * 
 */
document.querySelector('#btn6').addEventListener('click', (e) => {
    const src = 'ABCDajEfghijv 에베c벱베벱ㅇㅇ아ㅏㅏ \t\n1209869!@$%!_@#()\n\ts';
    const area = e.target.nextElementSibling;

    area.innerHTML = `<p>${src.replace(/\d/g, '<mark>$&</mark>')}</p>` // 숫자 하나하나 mark로 감싼 것
    area.innerHTML += `<p>${src.replace(/[0-9]/g, '<mark>$&</mark>')}</p>`
    area.innerHTML += `<p>${src.replace(/\w/g, '<mark>$&</mark>')}</p>`
    area.innerHTML += `<p>${src.replace(/[0-9a-zA-Z_]/g, '<mark>$&</mark>')}</p>`
    area.innerHTML += `<p>${src.replace(/\s/g, '<mark>$&</mark>')}</p>`
    area.innerHTML += `<p>${src.replace(/[ \t\n]/g, '<mark>$&</mark>')}</p>`

    area.innerHTML += `<p>${src.replace(/\D/g, '<mark>$&</mark>')}</p>` 
    area.innerHTML += `<p>${src.replace(/[^0-9]/g, '<mark>$&</mark>')}</p>` 
    area.innerHTML += `<p>${src.replace(/\W/g, '<mark>$&</mark>')}</p>`
    area.innerHTML += `<p>${src.replace(/[^0-9a-zA-Z_]/g, '<mark>$&</mark>')}</p>`
    area.innerHTML += `<p>${src.replace(/\S/g, '<mark>$&</mark>')}</p>`
    area.innerHTML += `<p>${src.replace(/[^ \t\n]/g, '<mark>$&</mark>')}</p>`
b
});

/**
 * () 그룹핑
 * | OR
 */
document.querySelector('#btn7').addEventListener('click', (e) => {
    const src = '월요일에는 월요병, 화가 부르르르 화요일 홧병, 수수술한잔 하는 수요일, 목이 컥~ 목요일, 금방 오지 않는 금요일, 하지만 오늘은 금요일';
    const area = e.target.nextElementSibling;

    area.innerHTML = `<p>${src.replace(/(월요일|수요일|금요일)/g, '<mark>$&</mark>')}</p>`;
    area.innerHTML += `<p>${src.replace(/[월수금]요일/g, '<mark>$&</mark>')}</p>`;


});

/**
 * Escaping
 * - ^$|[]. 문법요소를 문자그대로 사용하려면 \를 이용해 escaping처리를 해줘야한다 
 */
document.querySelector('#btn8').addEventListener('click', (e) => {
    const src = '3.4$';
    const area = e.target.nextElementSibling;

    area.innerHTML = `<p>${src.replace(/\$/g, '<mark>$&</mark>')}</p>`
    area.innerHTML += `<p>${src.replace(/\./g, '<mark>$&</mark>')}</p>`
    area.innerHTML += `<p>${src.replace(/[$]/g, '<mark>$&</mark>')}</p>` // []안에서는 escaping 불필요, \는 제외
});

/**
 * 수량자 quantifier
 * - a* a가 0개 이상
 * - a+ a가 1개 이상
 * - a? a가 0 or 1개
 */
document.querySelector('#btn9').addEventListener('click', (e) => {
    const src = 'aabc abc bc'
    const area = e.target.nextElementSibling;

    area.innerHTML = `<p>${src.replace(/a*b/g, '<mark>$&</mark>')}</p>`
    area.innerHTML += `<p>${src.replace(/a+b/g, '<mark>$&</mark>')}</p>`
    area.innerHTML += `<p>${src.replace(/a?b/g, '<mark>$&</mark>')}</p>`

    //a로 시작하고 z로 끝나는 문자열 검사
    const re = /^a.*z$/;
    console.log(re.test('abcdefghijkz')) // true
    console.log(re.test('adz')) // true
    console.log(re.test('az')) // true 
    console.log(re.test('abcde')) // false
    console.log(re.test('xyz')) // false
    console.log(re.test('안az녕')) // false

    //영문자로만 이루어진 문자열 검사
    const re2 = /^[A-Za-z]+$/;
    console.log(re2.test('ABCdef')) // true
    console.log(re2.test('ABC123def')) // false
    console.log(re2.test('')) // false
    console.log(re2.test('123')) // false

});

/**
 * 수량자
 * - a{5} a가 5개
 * - a{2, 5} a가 2개이상 5개이하
 * - a{2, } a가 2개이상
 * // a{, 5} 는 문법이 없다
 */
document.querySelector('#btn10').addEventListener('click', (e) => {
    const src = 'aa aba abba abbba';
    const area = e.target.nextElementSibling;

    area.innerHTML = `<p>${src.replace(/ab{0,}a/g, '<mark>$&</mark>')}</p>` // a 사이 b가 0개 이상
    area.innerHTML += `<p>${src.replace(/ab*a/g, '<mark>$&</mark>')}</p>` 

    area.innerHTML += `<p>${src.replace(/ab{1,}a/g, '<mark>$&</mark>')}</p>`// a 사이 b가 1개 이상
    area.innerHTML += `<p>${src.replace(/ab+a/g, '<mark>$&</mark>')}</p>`
    
    area.innerHTML += `<p>${src.replace(/ab{0,1}a/g, '<mark>$&</mark>')}</p>`// a 사이 b가 0개 이상 1개이하
    area.innerHTML += `<p>${src.replace(/ab?a/g, '<mark>$&</mark>')}</p>`

    area.innerHTML += `<p>${src.replace(/ab{1}a/g, '<mark>$&</mark>')}</p>`// a 사이 b가 1개

    //숫자 4자리 체크
    const re = /^\d{4}$/;
    console.log(re.test("1234"));
    console.log(re.test("12345"));
    console.log(re.test("123"));
    console.log(re.test("asdf"));
});

/**
 * 탐색 Look Around
 * - 탐색구문은 조회에 사용되고, 매칭결과에는 반영되지 않는다 
 * 
 * - 전방탐색 Look ahead
 *   - a(?=b) b가 뒤따르는 a를 검색
 *   - a(?!b) b가 뒤따르지 않는 a를 검색
 * - 후방탐색 Look behind
 *   - (?<=b)a b가 앞에 있는 a를 검색
 *   - (?<!b)a b가 앞에 없는 a를 검색
 * 
 */
document.querySelector('#btn11').addEventListener('click', (e) => {
    const area = e.target.nextElementSibling;
    const src1 = 'hello world hello tom hello jane hello world';
    area.innerHTML = `<p>${src1.replace(/hello(?= world)/g, '<mark>$&</mark>')}</p>`//world 가 뒤따르고 있는 hello 찾기
    area.innerHTML += `<p>${src1.replace(/hello(?! world)/g, '<mark>$&</mark>')}</p>`//world 가 뒤따르고 있지않은 hello 찾기

    const src2 = 'hello world lotte world t world';
    area.innerHTML += `<p>${src2.replace(/(?<=hello )world/g, '<mark>$&</mark>')}</p>` // 앞에 hello 가 있는 world 찾기
    area.innerHTML += `<p>${src2.replace(/(?<!hello )world/g, '<mark>$&</mark>')}</p>` // 앞에 hello 가 없는 world 찾기
});

/**
 * 비밀번호 정책
 * - 문자 8~12자리
 * - 영문자 포함
 * - 숫자 포함
 * - 특수문자 포함(!@#$%^&*())
 */
document.querySelector('#password').addEventListener('blur', (e) => {
    const regexps = [/^.{8,12}$/,/[a-z]/i, /[0-9]/,/[!@#$%^&*()]/];
    const value = e.target.value;

//   문자 8~12자리
    if (!regexps[0].test(value)){
        alert('비밀번호는 8~12자리여야만 합니다.')
        return;
    };
//   영문자 포함
    if (!regexps[1].test(value)){
        alert('비밀번호는 영문자를 하나 이상 포함해야 합니다.')
        return;
    };
//   숫자 포함
    if (!regexps[2].test(value)){
        alert('비밀번호는 숫자를 하나 이상 포함해야 합니다.')
        return;
    };
//   특수문자 포함(!@#$%^&*())
    if (!regexps[3].test(value)){
    alert('비밀번호는 특수문자(!@#$%^&*())를 하나 이상 포함해야합니다.')
    return;
    };
    alert('🐥유효한 비밀번호입니다.🐥');
});









/**
 * @실습문제 주민번호
 * - 6자리 생년월일 - 7자리 숫자 를 체크
 * - '유효한 주민번호입니다.' / '유효하지 않은 주민번호 입니다.' 출력 alert() < boolean반환 이용할 것 
 */
document.querySelector('#btn-ssn').addEventListener('click', (e) => {
    const src = document.querySelector('#ssn');
    ssnVal = src.value;
    // console.log(ssnVal);
    const check = /^[0-9]{6}-[0-9]{7}$/;

    if(check.test(ssnVal) == true){
        alert('유효한 주민번호입니다.🙆');
    } else{
        alert('유효하지 않은 주민번호 입니다.🙅‍♂️');
    }
});
