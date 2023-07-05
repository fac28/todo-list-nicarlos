import { equal, test } from "./test-helpers.js";
import { createNewListItem } from "../js/utils/createListItem.js";


const input = document.querySelector('#add-task-input');
const form = document.querySelector('form');
const addTaskBtn = document.querySelector('#add-task-btn');
const backlogList = document.querySelector('.backlog__list');


/* Test to add new list item */

test('Check that new task is added with correct input value', () => {
  input.value = 'Get a glass of water';
  addTaskBtn.click();
  const listItem = document.querySelector('.list-item');
  const listContent = document.querySelectorAll('.text-content');
  
  equal(listContent[0].textContent, 'Get a glass of water');
  listItem.remove();
  form.reset();
  
})