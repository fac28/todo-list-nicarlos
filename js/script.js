import { createNewListItem } from "./utils/createListItem.js";
import { showHideMeatballMenu } from "./utils/showHideMeatball.js";
import { moveToProgress } from "./utils/moveToProgress.js";
import { moveToBacklog } from "./utils/moveToBacklog.js";

/*------------------------------------*\
DOM Access
\*------------------------------------*/

const input = document.querySelector('#add-task-input');
const form = document.querySelector('form');
const addTaskBtn = document.querySelector('#add-task-btn');
const backlogParent = document.querySelector('#backlog');
const progressParent = document.querySelector('#progress');

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
        moveToProgress(target, 'backlog-btn', 'progress-btn', 'Backlog');       
    }
})

// ****************Progress listeners*****************/

progressParent.addEventListener('click', (event) => {
    const target = event.target;
    
    if (target.classList.contains('dropdown-btn')) {
        showHideMeatballMenu(target);
    }

    if (target.classList.contains('backlog-btn')) {
        moveToBacklog(target, 'progress-btn', 'baclklog-btn', 'In progress');       
    }

})

// ****************adds a new task to the backlog list*****************/

form.addEventListener('submit', event => {
    event.preventDefault();
    createNewListItem(input.value);
    form.reset();
})




