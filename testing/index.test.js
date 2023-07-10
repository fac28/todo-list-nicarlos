import { equal, test } from "./test-helpers.js";

const input = document.querySelector('#add-task-input');
const form = document.querySelector('form');
const addTaskBtn = document.querySelector('#add-task-btn');
const backlogContainer = document.querySelector('#backlog');
const progressContainer = document.querySelector('#progress');
const completeContainer = document.querySelector('#complete');

const runTest = () => {
  
  // Set a value and create new list item
  input.value = 'Get a glass of water';
  addTaskBtn.click();

  const listItem = document.querySelector('.list-item');
  const listContent = document.querySelectorAll('.text-content');

    /* Test to check if list item is correct and in correct container */
  
  test('Check that new task is added with correct input value', () => {
       
    equal(listContent[0].textContent, 'Get a glass of water');
    
    // Check if item is in backlog container
    const containsItem = backlogContainer.contains(listItem);

    // Run test
    equal(containsItem, true);
    
  })

  /* Test to move list items to in progress and complete sections */

  test('Check that list item is moved to In progress container', () => {
    
    // Click the dropdown button
    const menuBtn = document.querySelector('.dropdown-btn');
    menuBtn.click();

    // Click the move to progress button
    const progressBtn = document.querySelector('.progress-btn');
    progressBtn.click();

    const containsItem = progressContainer.contains(listItem);

    // Run test
    equal(containsItem, true);

  })

  test('Check that list item is moved to complete container', () => {
    
    // Click the dropdown button
    const menuBtn = document.querySelector('.dropdown-btn');
    menuBtn.click();

    // Click the move to progress button
    const completeBtn = document.querySelector('.complete-btn');
    completeBtn.click();

    const containsItem = completeContainer.contains(listItem);

    // Run test
    equal(containsItem, true);
  })


  /* Test to check if item is properly completed */

  test('Check that list item is deleted', () => {
    
    // Click the dropdown button
    const menuBtn = document.querySelector('.dropdown-btn');
    menuBtn.click();

    // Click the move to progress button
    const deleteBtn = document.querySelector('.delete-btn');
    deleteBtn.click();

    const containsItem = completeContainer.contains(listItem);

    // Run test
    equal(containsItem, false);

  })
  
  listItem.remove();
  form.reset();
}

runTest();




