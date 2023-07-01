import { equal, test } from "./test-helpers.js";

/* Test to add new list item */

test('Check that new task is added with correct input value', () => {
  const input = document.querySelector('#add-task-input');
  input.value = 'Get a glass of water';

  const addTaskBtn = document.querySelector('#add-task-btn');
  addTaskBtn.click();

  const listItem = document.querySelector('#task-one');
  equal(listItem.textContent, 'Get a glass of water');
  
  listItem.remove();
  
})