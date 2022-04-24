const listForm=document.querySelector('#listForm')
const listInput=document.querySelector('#listInput')
const listOl=document.querySelector('#listOl')
const savedList = localStorage.getItem('list');
let list=[];

function saveList() {
    localStorage.setItem('list',JSON.stringify(list));
}

function deleteList(event){
    const li = event.target.parentElement;
    li.remove()
    list = list.filter((list)=> list.id != li.id)
    console.log(list)
    saveList();
}

function listSubmit(event){
    event.preventDefault();
    const newList=listInput.value;
    listInput.value='';
    
    const newListObj ={
        id: Date.now(),
        text: newList,
    }
    list.push(newListObj);
    saveList(newListObj);
    writeList(newListObj);
}

function writeList(newListObj){
    const li = document.createElement('li');
    li.id=newListObj.id;
    const span = document.createElement('span');
    span.innerText = newListObj.text;

    const btn = document.createElement('button');
    btn.innerText = 'X';
    btn.addEventListener('click', deleteList)

    li.appendChild(span);
    li.appendChild(btn);
    listOl.appendChild(li);
}

listForm.addEventListener('submit', listSubmit)

if(savedList != null) { // 있으면
    const parsedList = JSON.parse(savedList);
    // list.foreach((writeList))
    parsedList.forEach((writeList))
}
