const input = document.querySelector('#add-task-input');
const form = document.querySelector('form');
const addTaskBtn = document.querySelector('#add-task-btn');
const backlogList = document.querySelector('.backlog__list');


// *********** creates new list item with 'more' menu icon ************/
const createNewListItem = (newTextContent) => {
    
    const backlogContainer = document.querySelector('#backlog');
  
    const itemTemplate = document.querySelector('#new-list-item');
    const domFragment = itemTemplate.content.cloneNode(true);
    domFragment.querySelector('p').textContent = newTextContent;
  
    backlogContainer.append(domFragment);
}

// ********** creates the dropdown 'more' menu ************/
const createMeatballMenu = (targetElement) => {
    const meatballMenu = document.createElement('div');
    meatballMenu.className = 'meatball-menu';
    meatballMenu.insertAdjacentHTML('beforeend', 
    `<ul class="meatball-menu__list">
        <li class="meatball-menu__item">item1</li>
        <li class="meatball-menu__item">item2</li>
        <li class="meatball-menu__item">item3</li>
    </ul`)
    targetElement.insertAdjacentElement('afterend', meatballMenu);
    return meatballMenu;
}


// ************ shows/hides the dropdown menu ************/
const showHideMeatballMenu = () => {
    const meatballIcons = document.querySelectorAll('.material-symbols-outlined');
    meatballIcons.forEach(icon => {
        const menu = icon.parentElement.nextElementSibling;
        createMeatballMenu(icon.parentElement);
        icon.addEventListener('click', () => {
            menu.classList.toggle('show')
        });   
    });
}

// ****************adds a new task to the backlog list*****************/
form.addEventListener('submit', event => {
    event.preventDefault();
    const newListItem = createNewListItem(input.value);
    showHideMeatballMenu();
    form.reset();
})


//  ************ list items more menu ****************


