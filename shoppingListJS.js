const addItemButton = document.querySelector('#btn');
const inputItem = document.querySelector('#itemInput');
const itemsList = document.querySelector('#itemsList');


addItemButton.addEventListener('click', () => {
    const inputValue = inputItem.value;
    inputItem.focus();
    if(inputValue === '') return;


    const content = document.createElement('li');
    const textNode = document.createElement('span');
    const deleteButton = document.createElement('button');

    deleteButton.innerHTML = 'delete';
    deleteButton.addEventListener('click', () => deleteItem(content));

    textNode.textContent = inputValue;


    content.appendChild(textNode);
    content.appendChild(deleteButton);
    itemsList.appendChild(content);

    inputItem.value = '';

    
});

function deleteItem(e) {
    itemsList.removeChild(e);
}


