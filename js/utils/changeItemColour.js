/* Function to change list item on parent container */

export const changeItemColour = (target, destinationID) => {
  const listItem = target.closest('.list-item');
  const listContent = listItem.querySelector('.list-content');

  if (destinationID === 'backlog') {
    listContent.style.background = 'var(--blue)';
  }

  if (destinationID === 'progress') {
    listContent.style.background = 'var(--green)';
  }


  if (destinationID === 'complete') {
    listContent.style.background = 'var(--pink)';
  }

}