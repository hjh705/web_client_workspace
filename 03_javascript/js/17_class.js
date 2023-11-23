/**
 * class
 * - 생성자 함수의 개선된 문법
 * - constructor 생성자
 * - 필드
 * - 메소드
 * - static vlfem
 * - static 메소드 
 */
const test1 = () => {
    const honggd = new Person('홍길동', 33);
    console.log(honggd);
    honggd.sayHello();

    console.log(Person, typeof Person);
    console.log(Person.prototype);
    console.log(Person.prototype == honggd.__proto__);
    //생성자 자원을 좀 더 쉽게 쓰는 법임

    console.log(Person.x);
    Person.y();
};
// this용법5. class 안의 this는 현재객체를 가리킨다.
class Person {
    static x = 100;
    static y(){
        console.log('yyyyyyyyyyyyyy')
    }

    constructor(name, age){
        //new 연산자에 의해 호출되는 생성자 메소드 
        this.name = name;
        this.age = age;
    }

    // Person.prototype에 작성됨 - Person 객체가 상속하고, 공유함
    sayHello(){
        console.log(`안녕하세요, ${this.age}세 ${this.name}입니다.`);
    }
}

/**
 * 상속
 * - extends 부모클래스
 * - 생성자 안에서 super() 부모생성자 호출 가능
 * - override 가능
 * - super. 부모 필드 / 메소드에 접근 가능 
 */
const test2 = () => {
    const honggd = new Dev('홍길동', 33, 'JavaScript');
    console.log(honggd);

    honggd.sayHello();
};

class Dev extends Person {
    constructor(name, age, lang){
        super(name, age);
        this.lang = lang;
    }
    //override
    sayHello(){
        console.log(`저는 ${this.lang} 개발자 입니다.`);
    }
}

const test3 = () => {
    const books = [
        new Novel('매트릭스', '네오', 35_000, 'SF'),
        new Novel('오라클 완전정복', '오라클', 25_000, '연애'),
        new Novel('So 스미스', '스미스', 15_000, '서정'),
        new Novel('용의자X의 헌신', '히가시노 게이고', 35_000, '심리')
    ]; 
    books.forEach((book)=> {
        book.info();
        book.read('홍길동');
    })
};

class Book {
    constructor(title, author, price){
        this.title = title;
        this.author = author;
        this.price = price;
    }
    info(){
        console.log(`${this.title} /${this.author}/ ${this.price}원`);
    }
};

class Novel extends Book {
    constructor(title, author, price, type){
        super(title, author, price);
        this.type = type;
    }
    read(who){
        console.log(`${who}이/가 ${title}(${type}) 을 읽는다`)
    }
};

