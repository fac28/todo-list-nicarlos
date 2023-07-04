// *********** creates new list item with 'more' menu icon ************/
export const createNewListItem = (newTextContent) => {
    
  const backlogContainer = document.querySelector('#backlog');

  const itemTemplate = document.querySelector('#new-list-item');
  const domFragment = itemTemplate.content.cloneNode(true);
  domFragment.querySelector('p').textContent = newTextContent;

  backlogContainer.append(domFragment);
}