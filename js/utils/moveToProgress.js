/* Function to move list item to progress container */

const moveToProgress = () => {
  const prgressConainer = document.getElementById('progress');

  const elementToMove = this.parentNode.parentNode;

  prgressConainer.append(elementToMove);

}