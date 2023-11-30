/**
 * mouseover / mouseout
 *   - 자식요소 접근시에도 이벤트 발생
 * mouseenter / mouseleave
 *   - 자식요소 접근시엔 이벤트 발생 안함
 */
$('.outer')
    // .mouseover(() => {
    //     console.log('mouseover');
    // })
    // .mouseout(() => {
    //     console.log('mouseout')
    // })
    // .mouseenter(() => {
    //     console.log('mouseenter');
    // })
    // .mouseleave(() => {
    //     console.log('mouseleave')
    // })
    // hover 이벤트는 존재하지 않는다 
    .hover(() => {
        console.log('mouseenter');
    }, () => {
        console.log('mouseleave')   
    });

$(title).hover((e) => {
    $(e.target).addClass('reverse');
}, (e) => {
    $(e.target).removeClass('reverse')
});

$(counter).on('click', (e) => {
    // e.target.innerHTML = $(e.target).html()
    let n = $(e.target).html();
    $(e.target).html(--n);

    if(n == 0)
        $(e.target).off('click'); // 이벤트핸들러 제거
})

// 1회용
$(one).one('click', (e) => {
    console.log('🤖');
    $(e.target).html('🤖')
});

//trigger event
$(trg).on('click', (e) => {
    $(counter).trigger('click'); //클릭 이벤트 발생
});


$(memo).on('keyup', (e) => {
    const len = e.target.value.length;
    const color = len > 30 ? 'red' : 'initial';
    const fontWeight = len > 30 ? 700 : 400;
    $('#len')
        .html(len)
        .css('color', color)
        .css('fontWeight', fontWeight)
});

$(document.memoFrm).submit((e) => {
    const $memo = $(e.target.memo);
    if($memo.val().length > 30){
        e.preventDefault();
    }

    // 초기화 - jQuery 객체에는 reset이 없음
    // javascript 객체로 꺼내서 reset 해줘야함 
    $(e.target).get(0).reset();
});