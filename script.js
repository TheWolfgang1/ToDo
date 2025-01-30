const inputBox = document.getElementById('input-box');
const listContainer = document.getElementsById('list-container');

function addTasks() {
    if (inputBox.value === ''){
        alert("You must write something");
    }

    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
    }
}