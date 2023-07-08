// *********** creates new list item with 'more' menu icon ************/

export const createNewListItem = (newTextContent) => {
  
  const id = 'item-' + counter;  
  const backlogContainer = document.querySelector('#backlog');

  const itemTemplate = document.querySelector('#new-list-item');
  const newItem = itemTemplate.content.cloneNode(true);
  newItem.querySelector('p').textContent = newTextContent;
  newItem.querySelector('.list-item').id = id;

  backlogContainer.append(newItem);
  counter ++;
} 

// Id Counter

let counter = 1;