/**
 * 객체 배열
 */
const test1 = () => {
    const pets = [];
    pets.push({
        name : '포동이',
        breed : '시츄',
        weight : 3,
        age : 9, 
        color : ['white'],
        bark() {
            return this.weight < 10 ? "왈왈" : "멍멍";
        }
    });
    pets.push({
        name : '애득',
        breed : '말티즈',
        weight : 4,
        age : 9, 
        color : ['white'],
        bark() {
            return this.weight < 10 ?  "왈왈" : "멍멍";
        }
    });
    pets.push({
        name : '사랑',
        breed : '코카스파니엘',
        weight : 13,
        age : 5, 
        color : ['white', 'brown'],
        bark() {
            return this.weight < 10 ?  "왈왈" : "멍멍";
        }
    });

    console.log(pets);
};

/**
 * 생성자함수
 * - new연산자와 함께 호출할 함수
 * - 해당타입의 객체가 반환 
 * - 관례적으로 대문자로 시작하는 이름을 갖는다 
 * - this용법3. 생성자함수(new연산자로 호출)안 this는 현재 객체를 가리킨다. 
 * 
 */
const test2 = () => {
    const pets = [];

    pets.push(new Pet('포동', '시츄', 3, 10, ['white']));
    pets.push(new Pet('애득', '말티즈', 4, 9, ['white']));
    pets.push(new Pet('사랑', '코카스파니엘', 13, 5, ['white', 'brown']));
    console.log(pets);

    pets.forEach((pet) => console.log(`${pet.name}이 ${pet.bark()} 짖는다.`));
};

function Pet(name, breed, weight, age, ...colors) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.age = age;
    this.colors = colors;
    this.bark = function(){
        return this.weight < 10 ? "왈왈" : "멍멍";
    };
}

/**
 * this용법 4. 일반함수 안에서 this는 window객체를 가리킨다.
 * - window = 브라우저의 최상위 객체 (DOM(document), js object, BOM, ...)
 */
const test3 = function() {
    console.log(this); // window
    console.log(window, globalThis);
}
    