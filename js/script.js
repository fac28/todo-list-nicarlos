import { createNewListItem } from "./utils/createListItem.js";
import { showHideMeatballMenu } from "./utils/showHideMeatball.js";
import { moveItem } from "./utils/moveItem.js";
import { deleteItem } from "./utils/deleteItem.js";

/*------------------------------------*\
DOM Access
\*------------------------------------*/

const input = document.querySelector('#add-task-input');
const form = document.querySelector('form');
const backlogParent = document.querySelector('#backlog');
const progressParent = document.querySelector('#progress');
const completeParent = document.querySelector('#complete');

/*------------------------------------*\
  Event Listeners
\*------------------------------------*/

// ****************Backlog listeners*****************/


backlogParent.addEventListener('click', (event) => {
    const target = event.target;
    
    // Toggle meatball menu

    if (target.classList.contains('dropdown-btn')) {
        showHideMeatballMenu(target);
    }
    // Move to in progress

    if (target.classList.contains('progress-btn')) {
        moveItem(target, 'progress')
    }

    // Move to Complete

    if (target.classList.contains('complete-btn')) {
        moveItem(target, 'complete')

    }

    // Delete item
    if (target.classList.contains('delete-btn')) {
        deleteItem(target);
    }
})

// ****************Progress listeners*****************/

progressParent.addEventListener('click', (event) => {
    const target = event.target;

    // Toggle meatball menu
    
    if (target.classList.contains('dropdown-btn')) {
        showHideMeatballMenu(target);
    }

        // Move to in backlog

    if (target.classList.contains('backlog-btn')) {
        moveItem(target, 'backlog')
    }

        // Move to complete

    if (target.classList.contains('complete-btn')) {
        moveItem(target, 'complete')
    }


    // Delete item
    if (target.classList.contains('delete-btn')) {
        deleteItem(target);
    }
})

// ****************Complete listeners*****************/


completeParent.addEventListener('click', (event) => {
    const target = event.target;
    
    // Toggle meatball menu

    if (target.classList.contains('dropdown-btn')) {
        showHideMeatballMenu(target);
    }
    // Move to in progress

    if (target.classList.contains('progress-btn')) {
        moveItem(target, 'progress')
    }

    // Move to Complete

    if (target.classList.contains('backlog-btn')) {
        moveItem(target, 'backlog')
    }

    // Delete item
    if (target.classList.contains('delete-btn')) {
        deleteItem(target);
    }
})

// ****************adds a new task to the backlog list*****************/

form.addEventListener('submit', event => {
    event.preventDefault();
    createNewListItem(input.value);
    form.reset();
})



