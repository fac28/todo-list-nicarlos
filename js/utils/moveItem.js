/* Function to move list item to progress container */


export const moveItem = (target, destinationID) => {
  const targetConainer = document.getElementById(destinationID);

  const elementToMove = target.parentNode.parentNode;

  targetConainer.append(elementToMove);

  target.parentElement.classList.remove('show');
}