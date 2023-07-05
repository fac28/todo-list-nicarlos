import { equal, test } from "./test-helpers.js";
import { createNewListItem } from "../js/utils/createListItem.js";


const input = document.querySelector('#add-task-input');
const form = document.querySelector('form');
const addTaskBtn = document.querySelector('#add-task-btn');
const backlogList = document.querySelector('.backlog__list');


/* Test to add new list item */

// test('Check that new task is added with correct input value', () => {
//   input.value = 'Get a glass of water';
//   addTaskBtn.click();

//   const backlog = document.querySelector('#backlog');
//   const listItem = document.querySelector('.list-item')
//   console.log(listItem)
//   const expected = `
//     <h2>Backlog:</h2>
//     <div class="list-item margin-top-md">
//       <div class="list-content">
//         <p class="text-content">Get a glass of water</p>
//         <button class="dropdown-btn">&#8230;</button>
//       </div>
//       <div class="dropdown-menu" aria-expanded="false" aria-hidden="true">
//         <h3>Move to:</h3>
//         <button>In progress</button>
//         <button>Complete</button>
//         <button>Delete</button>
//       </div>
//   </div>
//   `;
//   equal(backlog.innerHTML.replace(/\s+/g, ' ').trim(), expected.replace(/\s+/g, ' ').trim());
//   listItem.remove();
//   form.reset();
  
// })