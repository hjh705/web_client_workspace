const $ = (selector) => { // 선택자를 받고 객체 하나를 돌려줘야함 
    return new ShQuery(selector);
};

class ShQuery{
    constructor(selector){
        const elems = document.querySelectorAll(selector);
        this.length = elems.length;
        for(let i = 0; i < elems.length; i++){
            this[i] = elems[i];
        }
    }
    
    css(name, value){
        for(let i = 0; i < this.length; i++){
            this[i].style[name] = value;
        }
        return this;
    }

    click(f){
        for(let i = 0; i < this.length; i++){
            this[i].addEventListener('click', f)
        }
        return this;
    }

    html(html){
        for(let i = 0; i < this.length; i++){
            this[i].innerHTML = html;
        }
        return this;
    }
};