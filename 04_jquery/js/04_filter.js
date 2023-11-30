/**
 * filter 관련 메소드 - jquery 객체를 처음 생성할 때 자원이 많이 소모되서 최대한 변형하며 재사용하려고 사용
 * - jquery 객체 안의 요소를 필터링한 jquery객체를 반환
 * 
 * - filter(selector)
 * - first()
 * - last()
 * - eq(n)
 * - not(selector)
 * 
 * - end() : 필터링 전 상태로 돌아가는 메소드
 */
$(btn1).on('click', () => {
    const $h4 = $('h4');
    console.log($h4);
    
    console.log(
    $h4
        // .filter('.test')
        // .first()
        // .last()
        // .eq(3)
        .not('.test')
        .css('color', 'tomato')
        .end()
        .css('text-decoration', 'underline')
    );
});