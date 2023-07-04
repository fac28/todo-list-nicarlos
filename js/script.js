import { createNewListItem } from "./utils/createListItem.js";
import { showHideMeatballMenu} from "./utils/showHideMeatball.js"
/*------------------------------------*\
DOM Access
\*------------------------------------*/

const input = document.querySelector('#add-task-input');
const form = document.querySelector('form');
const addTaskBtn = document.querySelector('#add-task-btn');
const backlogParent = document.querySelector('#backlog');


/*------------------------------------*\
  Event Listeners
\*------------------------------------*/

// ****************adds dropdown menu event listeners*****************/


backlogParent.addEventListener('click', (event) => {
    const target = event.target;
    console.log(target);
    if (target.classList.contains('dropdown-btn')) {
        showHideMeatballMenu(target);
    }
})

// ****************adds a new task to the backlog list*****************/

form.addEventListener('submit', event => {
    event.preventDefault();
    createNewListItem(input.value);
    form.reset();
})




