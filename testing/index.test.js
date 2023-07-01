import { equal, test } from "./test-helpers.js";

const input = document.querySelector('#add-task-input');
const form = document.querySelector('form');
const addTaskBtn = document.querySelector('#add-task-btn');
const backlogList = document.querySelector('.backlog__list');

/* Test to add new list item */



test('Check that new task is added with correct input value', () => {
  input.value = 'Get a glass of water';
  const newListItem = document.createElement('li');

  form.addEventListener('submit', event => {
  event.preventDefault();
  
  newListItem.className = 'backlog__item';
  newListItem.textContent = input.value;
  backlogList.insertAdjacentElement('beforeend', newListItem);
})

  addTaskBtn.click();
  equal(newListItem.textContent, 'Get a glass of water');
  newListItem.remove();
  form.reset();
  
})