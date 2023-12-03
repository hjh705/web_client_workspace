/**
 * $(선택자)
 * - n개의 요소를 가진 객체가 반환되어야한다.
 *   - 0 . . . (n-1) 속성값을 가지고 있다
 *   - length 속성을 가지고 있다
 * - 해당 객체는 css 메소드를 가지고 있다.
 * - 해당 객체는 click 메소드를 가지고 있다. 
 */
$("#title")
    .css('color', 'blue');

$('li')
    .css('background-color', 'springgreen')
    .css('text-decoration', 'underline');

$('#title').click(() => {
    alert('ㅎㅇ');
});

$("li").html("만세");