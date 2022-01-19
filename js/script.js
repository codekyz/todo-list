// create del_btn nand append it to each list item
const liElement = document.querySelectorAll('li');
for ( l of liElement) {
    const span = document.createElement('span');
    const txt = document.createTextNode('\u00D7');
    span.className = 'del_btn';
    span.appendChild(txt);
    l.appendChild(span);
}

// click on del_btn to hide th current list item
const btn = document.querySelectorAll('.del_btn');
for ( i of btn ) {
    i.onclick = function () {
        let div = this.parentElement;
        div.style.display = "none";
    }
}

// add a 'checked' symbol when clicking on a list item
const list = document.querySelector('ul');
list.addEventListener('click', function (e) {
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    }
    
}, false);

//create a new list item when clicking on the 'add' btn
const addBtn = document.querySelector('.add_btn');
addBtn.addEventListener('click', newItem);

function newItem() {
    const li = document.createElement('li');
    let inputValue = document.querySelector('#inputvalue').value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("내용을 입력해주세요.");
    } else {
        list.appendChild(li);
    }
    inputValue = '';

    const span = document.createElement('span');
    const txt = document.createTextNode('\u00D7');
    span.className = 'del_btn';
    span.appendChild(txt);
    li.appendChild(span);

    const btn2 = document.querySelectorAll('.del_btn');
    for ( i of btn2 ) {
        i.onclick = function () {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}