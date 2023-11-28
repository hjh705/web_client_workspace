/**
 * Promise
 * - 비동기작업(producing code) + 콜백(consuming code)을 명쾌히 작성하는 문법
 * - Promise 객체는 status/result 상태값을 가짐
 *   - status : pending -> fulfilled | rejected
 *   - result : undefined -> value | error
 * - Promise객체는 두개의 callback함수를 가진다.
 *   - resolve : 정상처리된 경우 호출하는 콜백
 *   - reject : 오류가 발생한 경우 호출하는 콜백
 */
document.querySelector('#btn1').addEventListener('click',() => {
    // Promise에 전달하는 함수
    // - resolve 함수
    // - reject 함수
    const promise = new Promise((resolve, reject) => {
        // 난수를 생성 시 짝수면 정상, 홀수면 오류로 출력하기
        try{
            const n = Math.trunc(Math.random()*100 + 1); // 1~100
            console.log('난수가 생성되었습니다. : ', n);
            if (n % 2 == 0)
                resolve(n); // n => Promise#result값
            else
                throw new Error('홀수라 실패')
        }catch (e){
            reject(e); // e => Promise#result값
        }
    });

    //callback 작성
    promise.then((value) => {
        //성공 시 (fulfilled) 콜백
        console.log(`🙆${value}`);
    }, (err) => {
        //실패 시 (rejected) 콜백
        console.error(err);
    })
    console.log(promise);
});

/**
 * 
 */
document.querySelector('#btn2').addEventListener('click', () => {
    delay(3000)
        .then(() => {
            console.log('🦑')
        })

     //2초 후 🐣
     delay(2000)
     .then(() => {
         console.log('🐣');
     })
    
});

const delay = (millis) => {
    return new Promise((resolve) => {
        // 비동기작업
        setTimeout(() => resolve(), millis);
    });
}

/**
 * DOM
 */
document.querySelector('#btn3').addEventListener('click', () => {
    loadScript('js/24_test.js')
    .then(() => {
        test();
    })
});

const loadScript = (src) => new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve; // load 이벤트 발생 시 resolve(핸들러)호출
    document.head.append(script);
});

/**
 * Promise Chain
 * - Promise는 연속적으로 사용가능함
 * - 암묵적으로 promise 객체 반환(반환한 값이 있다면, 새 promise의 result 값으로 사용된다.)
 * - 명시적으로 promise 객체를 반환할 수도 있다.
 * - then절의 콜백함수가 반환
 */
document.querySelector('#btn4').addEventListener('click',() => {
    // result값 반환
    // new Promise((resolve) => {
    //    // 비동기작업
    //     resolve(2);
    // })
    // .then((value) => {
    //    // 콜백처리
    //     console.log(value); // 2
    //     return value * 2;
    // })
    // .then((value) => {
    //     console.log(value); // 4
    // })

    //promise 객체 반환
    template(3)
    .then((value) => {
        console.log(value);
        return template(value * 2);
    })
    .then((value) => {
        console.log(value);
    })
    .then((value) => {
        console.log(value);
    })
    .then((value) => {
        console.log(value);
    })

    // 1초 후에 🥚, 1초 후에 🐣, 1초 후에 🐥
    // then절 연속사용 (명시적으로 promise 반환)

    delay(1000)
        .then(() => {
            console.log('🥚🥚');
            return delay(1000);
        })
        .then(() => {
            console.log('🐣🐣');
            return delay(1000);
        })
        .then(() => {
            console.log('🐥🐥');
            return delay(1000);
        })

});

const template = (value) => new Promise((resolve) => {
    resolve(value);
});

/**
 * - changeBGColor : Promise 객체를 반환하는 함수 (비동기작업)
 * - then절 (콜백함수)
 */

const box = document.querySelector(".box");   

document.querySelector("#btn5").addEventListener("click", () => {

    box.style.backgroundColor = 'red'
    changeBGColor('orange', 1000)
    .then(() => {
        return changeBGColor('yellow', 1000)
    })
    .then(() => {
        return changeBGColor('green', 1000)
    })
    .then(() => {
        return changeBGColor('blue', 1000)
    })
    .then(() => {
        return changeBGColor('navy', 1000)
    })
    .then(() => {
        return changeBGColor('purple', 1000)
    });
});

const changeBGColor = (color, millis) => {return new Promise((resolve) => {
     
    setTimeout(() => {
        box.style.backgroundColor = color;
        resolve(); // resolve는 필수임 
        }, millis);
    })
};