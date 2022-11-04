const input=document.getElementById('inp');
const button=document.getElementById('but');
const lists=document.getElementById('list');
button.addEventListener('click',addList);
function addList(){
    let newElement=document.createElement('li');
    newElement.innerText=input.value;
    lists.appendChild(newElement);
    let deleteButton=document.createElement('button');
    deleteButton.setAttribute('id','delete');
    deleteButton.innerText='delete';
    lists.appendChild(deleteButton);
    deleteButton.addEventListener('click',function(){
        newElement.remove();
        deleteButton.remove();
    });
    if(input.value===''){
        alert('enter text');

    }
    else{
        lists.appendChild(input.value)
    }
   
}