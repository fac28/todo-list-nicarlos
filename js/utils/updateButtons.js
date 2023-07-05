/* Update Buttons Function */

export const updateButtons = (containerElement) => {
  const buttons = containerElement.querySelectorAll('.dropdown-menu buttons');
  const container = containerElement.dataset.container;
  let containerText, containerClass;

  // Set the container-specific data
  if (container === 'in-progress') {
    containerText = 'In progress';
    containerClass = 'progress-btn';
  } else if (container === 'complete') {
    containerText = 'Complete';
    containerClass = 'complete-btn';
  } else if (container === 'delete') {
    containerText = 'Delete';
    containerClass = 'delete-btn';
  }

  // Update the buttons with the container-specific data
  buttons.forEach(function(button) {
    button.textContent = containerText;
    button.className = containerClass;
  });
}
