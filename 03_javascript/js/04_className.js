/**
 * class를 통한 제어
 * - className(문자열)
 * - classList객체
 *      - add(className : string)
 *      - remove(className : string)
 *      - toggle(className : string)
 */
function checkSubject(checkbox){
    console.log('checkSubject', checkbox);
    //부모 td찾기
    const td = checkbox.parentElement;
    console.log(td);
    //.on Toggle하기 
    // if문으로
    // if(checkbox.checked){
    //     td.className = "on";
    // }else{
    //     td.className = "";
    // }

    // 삼항연산자로 
    // td.className = checkbox.checked ? "on" : "";

    // class를 통한 제어 1
    // if(checkbox.checked){
    //     td.classList.add("on");
    // } else{
    //     td.classList.remove("on");
    // }
    // class를 통한 제어 2
    td.classList.toggle("on");
}