const input = document.querySelector('#add-task-input');
const form = document.querySelector('form');
const addTaskBtn = document.querySelector('#add-task-btn');
const backlogList = document.querySelector('.backlog__list');


form.addEventListener('submit', event => {
    event.preventDefault();
    const newListItem = document.createElement('li');
    newListItem.className = 'backlog__item list__item';
    newListItem.textContent = input.value;
    backlogList.insertAdjacentElement('afterbegin', newListItem);
    newListItem.insertAdjacentHTML('beforeend', 
    `<span class="material-symbols-outlined">
    more_horiz
    </span>`)

    form.reset();
})