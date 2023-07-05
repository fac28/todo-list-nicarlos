import { createNewListItem } from "./utils/createListItem.js";
import { showHideMeatballMenu } from "./utils/showHideMeatball.js";

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
    
    if (target.classList.contains('dropdown-btn')) {
        showHideMeatballMenu(target);
    }

    if (target.classList.contains('progress-btn')) {
        moveToProgress(target);       
    }
})

// ****************Progress listeners*****************/

progressParent.addEventListener('click', (event) => {
    const target = event.target;
    
    if (target.classList.contains('dropdown-btn')) {
        showHideMeatballMenu(target);
    }

    if (target.classList.contains('backlog-btn')) {
        moveToBacklog(target);       
    }

})

// ****************adds a new task to the backlog list*****************/

form.addEventListener('submit', event => {
    event.preventDefault();
    createNewListItem(input.value);
    form.reset();
})

const moveToProgress = (target) => {
    const prgressConainer = document.getElementById('progress');
  
    const elementToMove = target.parentNode.parentNode;
  
    prgressConainer.append(elementToMove);
  
    target.parentElement.classList.remove('show');
    target.textContent = 'Backlog';
    target.classList.add('backlog-btn');
    target.classList.remove('progress-btn');
  }

 const moveToBacklog = (target) => {
    const backlogConainer = document.getElementById('backlog');
  
    const elementToMove = target.parentNode.parentNode;
  
    backlogConainer.append(elementToMove);
  
    target.parentElement.classList.remove('show');
    target.textContent = 'In Progress';
    target.classList.add('progress-btn');
    target.classList.remove('backlog-btn');
 }



