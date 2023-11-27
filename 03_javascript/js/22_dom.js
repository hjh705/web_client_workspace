/**
 * 모든 객체태그는 Node와 Element를 상속한다 
 * 
 * - Node
 *    - TextNode
 *    - CommentNode
 *    - Element
 * - Element (태그객체)
 * 
 * - Node#appendChild
 * - Element#append
 */
document.querySelector('#btn1').addEventListener('click', () => {
    const sample = document.querySelector('#sample');
    console.dir(sample);

    console.dir(Node.prototype);
    console.dir(Element.prototype);
});

/**
 * 새로운 요소
 * 1. innerHTML
 * 2. Tag객체로 만들어서 DOM Tree에 추가 
 */
document.querySelector('#btn2').addEventListener('click', () => {
    const h2 = document.createElement('h2'); // <h2></h2>
    const text = document.createTextNode('HelloWorld'); // 'HelloWorld'
    h2.appendChild(text); // <h2>HelloWorld</h2>
    // document.querySelector('#target').appendChild(h2); // <div id = 'target><h2>HelloWorld</h2></div>
    document.querySelector('#target').append(h2);
    //이벤트핸들러
    h2.addEventListener('mouseover', () => {
        console.log('🍎');
    });
});

/**
 * img태그 생성
 */
document.querySelector('#btn3').addEventListener('click', () => {
    const img = document.createElement('img'); //<img/>
    img.src = '../../sample/image/hyunta.jpg';
    img.alt = '개사진';
    // img.style = 'width : 200px';
    img.style.width = '200px';
    document.querySelector('#target').appendChild(img);
});

/**
 * 요소 제거
 * - remove() 스스로 제거
 * - removeChild(child) 자식요소 제거
 */
document.querySelector("#btn4").addEventListener('click',() => {
    document.querySelector('#foo');
    foo.remove();
});

document.querySelector("#btn5").addEventListener('click',() => {
    const list = document.querySelector('#list');
    const foo = document.querySelector('#foo');

    // 특정 자식요소 하나만 제거
    // list.removeChild(foo);

    //모든 자식요소 제거
    while(list.firstChild){
        list.removeChild(list.firstChild);
    }
});

/**
 * DOM Traversing
 * - 특정요소에서 DOM Tree를 따라 다음요소를 찾아가는 기술 
 * 
 * Node
 * - 자식 firstChild | lastChild | childNodes
 * - 부모 parentNode
 * - 형제 nextSibling | previousSibling
 * 
 * Element < 주로 사용
 * - 자식 firstElementChild | lastElementChild | children
 * - 부모 parentElement
 * - 형제 nextElementSibling | previousElementSibling
 * 
 */

//자식
document.querySelector('#btn6').addEventListener('click', () => {
    const src = document.querySelector('.wrapper');
    const p1 = src.firstElementChild;
    const p5 = src.lastElementChild;
    const p = src.children;
    console.log(src, p1, p5, p);

    p1.style.color = 'pink';
});

//부모
document.querySelector('#btn7').addEventListener('click', () => {
    const src = document.querySelector('#p3');
    const parent = src.parentElement;
    console.log(src, parent);
});

//형제
document.querySelector('#btn8').addEventListener('click', () => {
    const src = document.querySelector('#p3');
    const prevSibling = src.previousElementSibling.previousElementSibling; // p1
    const nextSibling = src.nextElementSibling.nextElementSibling; // p5
    console.log(src, prevSibling, nextSibling);
});

/**
 * 기존 내용을 대체하기 
 */
document.querySelector('#btn9').addEventListener('click', () => {
    const wrapper = document.querySelector('.wrapper');
    Array.from(wrapper.children).forEach((child, index) => {
        console.log(child, index);
        const newText = document.createTextNode(`🦑${index + 1}`)
        child.removeChild(child.firstChild);//Node계열의 속성(text, comment, Element)
        child.appendChild(newText);
    });
});