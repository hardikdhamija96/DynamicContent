
function addTaskItem(){
    // const taskList = document.querySelector('.taskList');

    const input = document.querySelector('.input');
    const inputVal = input.value.trim();

    if(inputVal !==''){
        const newTaskItem = document.createElement('div');
        newTaskItem.classList.add('taskItems');

        const taskNameWrapper = document.createElement('span');
        taskNameWrapper.classList.add('taskNameWrapper');

        const taskName = document.createElement('p');
        taskName.classList.add('taskName');
        taskName.textContent = inputVal;

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('taskBtn','btn');
        deleteBtn.textContent='-';

        taskNameWrapper.appendChild(taskName);
        newTaskItem.appendChild(taskNameWrapper);
        newTaskItem.appendChild(deleteBtn);


        const taskList = document.createElement('div');
        taskList.classList.add('taskList');
        taskList.appendChild(newTaskItem);

        const mainWrapper = document.querySelector('.mainWrapper')
        mainWrapper.appendChild(taskList)

        input.value=' ';

        // Add event listener to the delete button here
        deleteBtn.addEventListener('click', () => {
            const grandParent = deleteBtn.parentElement.parentElement;
            const mainWrapper = document.querySelector('.mainWrapper');
            mainWrapper.removeChild(grandParent);
        });
    }
}

function handleAddBtnClick(){
    addTaskItem();
}

const addBtn = document.querySelector('.top-btn');
addBtn.addEventListener('click', handleAddBtnClick);



// const delBtn = document.querySelector('.taskBtn');
// delBtn.addEventListener('click' ,()=>{

//     const grandParent = delBtn.parentElement.parentElement;
//     const mainWrapper = document.querySelector('.mainWrapper');
//     mainWrapper.removeChild(grandParent);
// })