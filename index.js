const shoppinglist = []; // array to store items

const additem = () => {
    const itemInput = document.getElementById('itemInput');
    const itemValue = itemInput.value.trim();

    if (itemValue !== '') {
        const newItem = {
            name: itemValue,
            purchased: false
        };

        shoppinglist.push(newItem);// adds items to the array

        const newList = document.createElement('li');
        newList.textContent = itemValue;

        newList.addEventListener('click', () => {
            newList.classList.toggle('purchased');
        });

        document.getElementById('list').appendChild(newList);

        itemInput.value = '';
    } else {
        alert('item not added');
    }
};

const markpurchased = () => {
    const listItems = document.querySelectorAll('#list li');
    
    listItems.forEach(item => {
        item.classList.toggle('purchased');
    });
};

// event listener to clear
function clearlist() {
    const list = document.getElementById('list');
    list.innerHTML = '';
}

// adding an event listener when click enter to add an item to the list
document.getElementById('itemInput').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        additem();  
    }
});