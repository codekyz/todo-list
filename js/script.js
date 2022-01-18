const deleteButton = document.querySelectorAll('.del_btn');
const addButton = document.querySelector('.add_btn');

const itemValue = document.querySelector('#item');
const memoValue = document.querySelector('#memo');

const ulWrap = document.querySelector('.list > ul');
const checkBox = document.querySelector('.checkbox');
const todoValue = document.querySelector('.todo_value');

let itemList = ['할일을 적어보세요'];

getList();

function addItem() {
    let item = itemValue.value;
    if (item != null) {
        itemList.push(item);
        addOneItem(item);
        itemValue.value = '';
        itemValue.focus();
    }
}

function delItem() {
    console('들어오냐');
    let ditem = dbtn.previousElementSibling.textContent;
    let dindex = itemList.indexOf(ditem);
    itemList.splice(dindex, 1);
    console.log(itemList);

}

// 하나의 item을 추가할 때
function addOneItem(item) {
    let i = item
    const liElement = `
        <li class="todo">
            <div class="checkbox">V</div>
            <div class="todo_value">${i}</div>
            <button class="del_btn">삭제</button>
        </li>
    `;
    ulWrap.insertAdjacentHTML('beforeend', liElement);
}

// 저장된 list를 가져올때
function getList() {
    for (i of itemList) {
        addOneItem(i);
    }
    
}



itemValue.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addItem();
    }
});
addButton.addEventListener('click', addItem);

// itemlist를 읽어오기 전까지는 삭제버튼이 존재하지 않으므로 오류발생
// 따라서 버튼이 있는지 체크하는 과정을 추가
if(deleteButton) {
    for(b of deleteButton) {
        b.addEventListener('click', delItem);
    }
}